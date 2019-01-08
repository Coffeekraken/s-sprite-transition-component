import "babel-polyfill"
import "coffeekraken-sugar/js/features/all"
import SSpriteTransitionComponent from "../../../dist/index"

const $transition = document.querySelector('s-sprite-transition')
$transition.addEventListener('ready', (e) => {
  playTransition()
})

document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault()
  playTransition()
})

function playTransition() {
  return
  $transition.animateIn().then(() => {

    setTimeout(() => {
      $transition.animateOut().then(() => {
        console.log('Yop')
      })
    }, 1000)
  })
}
