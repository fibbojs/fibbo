import type { FComponent2d } from '@fibbojs/2d'
import { FScene2d as FScene2dLegacy } from '@fibbojs/2d'

// Extends RTCPeerConnection to add an identity property
interface CustomRTCPeerConnection extends RTCPeerConnection {
  identity: string
}

/**
 * @description A scene which contains the components and the camera.
 * Also contains the Rapier world if physics is enabled.
 */
export class FScene2d extends FScene2dLegacy {
  // Ice configuration
  iceConfiguration: RTCConfiguration
  // Store connection between peers
  peerConnections: Record<string, CustomRTCPeerConnection>
  // Store data channels between peers
  dataChannels: Record<string, RTCDataChannel>
  // Store events for the data channel
  dataChannelEvents: Record<string, Array<(data: any) => void>>

  constructor(iceConfiguration: RTCConfiguration = {
    iceServers: [
      {
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
      },
    ],
    iceCandidatePoolSize: 10,
  }) {
    // Initialize the scene
    super()
    // Set the ICE configuration
    this.iceConfiguration = iceConfiguration
    // Initialize the peer connections and data channels
    this.peerConnections = {}
    this.dataChannels = {}
    // Initialize the data channel events
    this.dataChannelEvents = {}
  }

  /**
   * @description Add a component to the scene.
   */
  addComponent(component: FComponent2d): void {
    super.addComponent(component)
  }

  /**
   * @description Create a room and return the WebRTC offer token.
   * @returns The WebRTC offer token as a base64 encoded string.
   */
  async createRoom(): Promise<string> {
    const peerConnection = new RTCPeerConnection(this.iceConfiguration) as CustomRTCPeerConnection
    peerConnection.identity = 'local'
    this.peerConnections[peerConnection.identity] = peerConnection
    const candidates: RTCIceCandidate[] = []

    // Create offer
    const createOfferPromise = new Promise((resolve, reject) => {
      peerConnection.createOffer()
        .then((offer) => {
          // Set local description
          peerConnection.setLocalDescription(offer)
            .then(() => resolve(offer))
            .catch(error => reject(error))
        })
        .catch(error => reject(error))
    }) as Promise<RTCSessionDescriptionInit>

    // Gather ICE candidates
    const gatherCandidatesPromise = new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error('ICE candidate gathering timed out'))
      }, 2000) // Timeout after 2 seconds

      peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          // Add the ICE candidate to the list
          candidates.push(event.candidate)
        }
        else {
          // Clear the timeout
          clearTimeout(timer)
          // Resolve the candidates
          resolve(candidates)
        }
      }
    }) as Promise<RTCIceCandidate[]>

    // Wait for the offer to be created
    await createOfferPromise
    // Wait for ICE candidates to be gathered
    await gatherCandidatesPromise

    // Return the offer and the ICE candidates
    return btoa(JSON.stringify({
      offer: peerConnection.localDescription,
      candidates,
    }))
  }

  /**
   * @description Join a room using the WebRTC offer token.
   * @param token The WebRTC offer token as a base64 encoded string.
   * @returns The WebRTC answer token as a base64 encoded string.
   */
  async tryJoinRoom(token: string): Promise<string> {
    const { candidates, offer } = JSON.parse(atob(token))

    const peerConnection = new RTCPeerConnection(this.iceConfiguration)
    // const dataChannel = peerConnection.createDataChannel('my-channel')

    // Add the given ICE candidates
    for (const candidate of candidates)
      peerConnection.addIceCandidate(new RTCIceCandidate(candidate)).catch(error => console.error(error))

    // Set remote description
    const createAnswerPromise = new Promise((resolve, reject) => {
      peerConnection.setRemoteDescription(new RTCSessionDescription(offer))
        .then(() => {
          // Create answer
          peerConnection.createAnswer()
            .then((answer) => {
              peerConnection.setLocalDescription(answer)
                .then(() => resolve(answer))
                .catch(error => reject(error))
            })
            .catch(error => reject(error))
        })
        .catch(error => reject(error))
    })

    // Gather ICE candidates
    const gatherCandidatesPromise = new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error('Failed to gather ICE candidates'))
      }, 2000) // Timeout after 2 seconds

      peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          candidates.push(event.candidate)
        }
        else {
          clearTimeout(timer)
          resolve({ candidates })
        }
      }
    })

    // Wait for the answer to be created
    await createAnswerPromise
    // Wait for ICE candidates to be gathered
    await gatherCandidatesPromise

    // Return the answer and the ICE candidates
    return btoa(JSON.stringify({
      answer: peerConnection.localDescription,
      candidates,
    }))
  }

  /**
   * @description Accept a peer connection using the WebRTC answer token.
   * @param token The WebRTC answer token as a base64 encoded string.
   */
  acceptPeer(token: string) {
    const { candidates, answer } = JSON.parse(atob(token))

    const peerConnection = this.peerConnections.local

    // Add the given ICE candidates
    for (const candidate of candidates)
      peerConnection.addIceCandidate(new RTCIceCandidate(candidate)).catch(error => console.error(error))

    // Set remote description
    peerConnection.setRemoteDescription(new RTCSessionDescription(answer))
      .catch(error => console.error(error))
  }

  /**
   * @description Create a data channel for the given peer connection.
   * @param peerConnection The peer connection to create the data channel for.
   * @returns The created data channel.
   */
  createDataChannel(peerConnection: CustomRTCPeerConnection): RTCDataChannel {
    const dataChannel = peerConnection.createDataChannel('dataChannel')
    dataChannel.onmessage = (event) => {
      const receivedData = JSON.parse(event.data)
      this.emit(receivedData.event, { peerId: peerConnection.identity, data: receivedData.data })
    }
    return dataChannel
  }

  /**
   * @description Send data to the specified peer.
   * @param peerConnection The peer connection to send the data to.
   * @param event The event to send.
   * @param data The data to send.
   */
  sendDataChannel(peerConnection: CustomRTCPeerConnection, event: string, data: any): void {
    const dataChannel = this.dataChannels[peerConnection.identity]
    if (!dataChannel)
      throw new Error('Not connected to peer')

    const message = JSON.stringify({ event, data })
    dataChannel.send(message)
  }

  /**
   * @description Add a listener to the given event.
   * @param event The event to listen to.
   * @param callback The callback to call when the event is received.
   */
  on(event: string, callback: (data: any) => void) {
    if (!this.dataChannelEvents[event])
      this.dataChannelEvents[event] = []

    this.dataChannelEvents[event].push(callback)
  }

  /**
   * @description Send an event to the specified peer.
   * If no peer is specified, the event is sent to all peers.
   * @param event The event to send.
   * @param data The data to send.
   * @param peerId The peer to send the event to (optional).
   */
  send(event: string, data: any, peerId?: string): void {
    if (!peerId) {
      // Send the event to all peers
      for (const peerConnection of Object.values(this.peerConnections))
        this.sendDataChannel(peerConnection, event, data)
    }
    else if (this.peerConnections[peerId]) {
      // Send the event to the specified peer
      this.sendDataChannel(this.peerConnections[peerId], event, data)
    }
    else {
      throw new Error(`Peer not connected: ${peerId}`)
    }
  }

  /**
   * @description Emit an event.
   * @param event The event to emit.
   * @param data The data to emit.
   */
  emit(event: string, data: any): void {
    const callbacks = this.dataChannelEvents[event]
    if (callbacks) {
      for (const callback of callbacks)
        callback(data)
    }
  }
}
