// Using https://esm.sh/ to import the ESM module
import confetti from 'https://esm.sh/canvas-confetti@1.6.0'

/**
 * Fire confetti when pressing the "F" key
 * https://confetti.js.org/more.html
 */
function randomInRange(min, max) {
  return Math.random() * (max - min) + min
}
window.addEventListener('keydown', (e) => {
  if (e.key === 'f' || e.key === 'F') {
    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { y: 0.6 },
    })
  }
})
