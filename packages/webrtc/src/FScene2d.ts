import type { FComponent2d } from '@fibbojs/2d'
import { FScene2d as FScene2dLegacy } from '@fibbojs/2d'

/**
 * @description A scene which contains the components and the camera.
 * Also contains the Rapier world if physics is enabled.
 */
export class FScene2d extends FScene2dLegacy {
  // Ice configuration
  iceConfiguration: RTCConfiguration
  // RTCPeerConnection
  declare rtcPeerConnection: RTCPeerConnection
  // Data channel
  declare dataChannel: RTCDataChannel
  // Gathered ICE candidates
  gatheredIceCandidates: RTCIceCandidate[] = []

  constructor(iceConfiguration: RTCConfiguration = {
    iceServers: [
      {
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
      },
    ],
    iceCandidatePoolSize: 10,
  }) {
    super()
    this.iceConfiguration = iceConfiguration
  }

  /**
   * @description Add a component to the scene.
   */
  addComponent(component: FComponent2d): void {
    super.addComponent(component)
  }

  /**
   * @description Create a WebRTC room.
   * @returns The base64 encoded SDP for joining peer.
   */
  async createRoom(): Promise<string> {
    // Create an RTCPeerConnection
    this.rtcPeerConnection = new RTCPeerConnection(this.iceConfiguration)
    this.dataChannel = this.rtcPeerConnection.createDataChannel('dataChannel')
    this.dataChannel.onopen = () => {
      console.log('Data channel opened (as creator)')
    }
    this.dataChannel.onmessage = (event) => {
      console.log('Data channel message:', event.data)
    }

    // Create an offer and set local description
    const offer = await this.rtcPeerConnection.createOffer()
    await this.rtcPeerConnection.setLocalDescription(offer)

    // Implement logic to gather ICE candidates
    this.rtcPeerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        // Add ICE candidate to gathered candidates
        this.gatheredIceCandidates.push(event.candidate)
      }
    }

    // Wait for a moment to allow ICE candidates to be gathered
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Create WebRTC token
    const token = { sdp: offer, iceCandidates: this.gatheredIceCandidates }
    console.log('token', token)
    // Encode SDP and ICE candidates to base64
    const encodedOffer = btoa(JSON.stringify(token))

    // Clear gathered candidates for next use
    this.gatheredIceCandidates = []

    return encodedOffer // Return the base64 encoded SDP for joining peer
  }

  /**
   * @description Join a WebRTC room.
   * @param token The base64 encoded token containing SDP and ICE candidates.
   */
  async joinRoom(token: string): Promise<void> {
    const decodedToken = JSON.parse(atob(token))
    console.log('decodedToken', decodedToken)
    const decodedOffer = decodedToken.sdp
    const iceCandidates = decodedToken.iceCandidates

    // Create an RTCPeerConnection
    this.rtcPeerConnection = new RTCPeerConnection(this.iceConfiguration)
    this.dataChannel = this.rtcPeerConnection.createDataChannel('dataChannel')
    this.dataChannel.onopen = () => {
      console.log('Data channel opened (as joiner)')
    }
    this.dataChannel.onmessage = (event) => {
      console.log('Data channel message:', event.data)
    }

    // Set remote description with received SDP
    await this.rtcPeerConnection.setRemoteDescription(decodedOffer)

    // Add gathered ICE candidates (if any)
    for (const iceCandidate of iceCandidates)
      await this.rtcPeerConnection.addIceCandidate(iceCandidate)

    // Create an answer and set local description
    const answer = await this.rtcPeerConnection.createAnswer()
    await this.rtcPeerConnection.setLocalDescription(answer)
  }

  sendData(data: any) {
    console.log(this.dataChannel)
    if (this.dataChannel && this.dataChannel.readyState === 'open')
      this.dataChannel.send(JSON.stringify(data)) // Send JSON data
    else
      console.error('Data channel not ready for sending data')
  }
}
