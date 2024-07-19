import './style.css'
import { FCircle, FSprite, FSquare } from '@fibbojs/2d'
import { FScene2d } from '@fibbojs/webrtc'
import MySquare from './classes/MySquare'

async function createRoom(scene: FScene2d) {
  /**
   * Create objects
   */
  const square = new MySquare(scene)
  scene.addComponent(square)

  const square2 = new FSquare(scene)
  square2.setPosition(0, 3)
  square2.setScale(0.5, 0.5)
  square2.setRotationDegree(45)
  square2.initCollider()
  scene.addComponent(square2)

  const square3 = new FSquare(scene)
  square3.setPosition(4, 1)
  square3.initCollider()
  scene.addComponent(square3)

  const square4 = new FSquare(scene)
  square4.setPosition(-2.2, 1)
  square4.setScale(0.5, 0.5)
  square4.initCollider()
  scene.addComponent(square4)

  const square5 = new FSquare(scene)
  square5.setPosition(1, 2)
  square5.setScale(0.5, 0.5)
  scene.addComponent(square5)

  const circle = new FCircle(scene)
  circle.setPosition(0, 3)
  circle.setScale(1, 1)
  circle.initRigidBody()
  scene.addComponent(circle)

  const sprite = new FSprite(scene, '/fibbo/playground-2d-webrtc/bunny.png')
  sprite.setPosition(2, 3)
  sprite.initRigidBody(undefined, {
    x: 0.3,
    y: 0.5,
  })
  scene.addComponent(sprite)

  /**
   * Init connection
   */
  const webrtcToken = await scene.createRoom()
  console.log('webrtcToken', webrtcToken)
  console.log('peerLink', `${window.location.href}?webrtcToken=${webrtcToken}`)
}

async function joinRoom(scene: FScene2d, webrtcToken: string) {
  const webRtcAnswerToken = await scene.tryJoinRoom(webrtcToken)
  console.log(webRtcAnswerToken)
}

(async () => {
  const scene = new FScene2d()
  await scene.init()
  await scene.initPhysics()

  /**
   * DEBUG
   */
  let webrtcAnswerToken = ''
  function acceptPeer(scene: FScene2d) {
    scene.acceptPeer(webrtcAnswerToken)
  }
  // Create a button to accept the pear
  const button = document.createElement('button')
  button.textContent = 'Accept Peer'
  button.style.position = 'absolute'
  button.style.bottom = '10px'
  button.style.right = '10px'
  button.onclick = () => acceptPeer(scene)
  // Create a text input to fill the WebRTC Answer Token
  const input = document.createElement('input')
  input.type = 'text'
  input.style.position = 'absolute'
  input.style.bottom = '60px'
  input.style.right = '10px'
  input.style.width = '200px'
  input.style.height = '30px'
  input.value = ''
  input.placeholder = 'WebRTC Answer Token'
  input.onchange = (event) => {
    webrtcAnswerToken = (event.target as HTMLInputElement).value
  }
  input.style.zIndex = '100'
  // Add the elements to the DOM
  document.body.appendChild(input)
  document.body.appendChild(button)

  // Get WebRTCToken from URL (if any)
  const urlParams = new URLSearchParams(window.location.search)
  const webrtcToken = urlParams.get('webrtcToken')
  // Listen for event on the scene
  scene.on('peer-accepted', (message) => {
    console.log('peer-accepted', message)
  })
  if (webrtcToken) {
    // Join room
    await joinRoom(scene, webrtcToken)
  }
  else {
    // Create room
    await createRoom(scene)
  }
})()
