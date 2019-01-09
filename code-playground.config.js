module.exports = {
  // server port
  port: 3000,

  // title
  title: "s-sprite-transition-component",

  // layout
  layout: "right",

  // compile server
  compileServer: {
    // compile server port
    port: 4000
  },

  // demos
  demos: {
    'yoyo': {
      title: 'Yoyo transition out',
      editors: {
        html: {
          language: 'html',
          data: `
            <s-sprite-transition src="/demo/data/urban-480x270@30.png" frame-width="480" out-duration="700" yoyo color="#2b3438"></s-sprite-transition>
            <button class="btn btn--primary" onClick="playTransition()">
              Play the transition again
            </button>
          `
        }
      }
    },
    'draw': {
      title: 'Draw transition',
      editors: {
        html: {
          language: 'html',
          data: `
            <s-sprite-transition src="/demo/data/draw-480x270@60.png" frame-width="480" out-duration="700" still-frame="28" color="#2b3438"></s-sprite-transition>
            <button class="btn btn--primary" onClick="playTransition()">
              Play the transition again
            </button>
          `
        }
      }
    },
    'ink': {
      title: 'Ink transition',
      editors: {
        html: {
          language: 'html',
          data: `
            <s-sprite-transition src="/demo/data/ink-640x360@26.png" frame-width="640" out-duration="700" yoyo color="#2b3438"></s-sprite-transition>
            <button class="btn btn--primary" onClick="playTransition()">
              Play the transition again
            </button>
          `
        }
      }
    },
    'color': {
      title: 'Colorize transition',
      editors: {
        html: {
          language: 'html',
          data: `
            <s-sprite-transition src="/demo/data/ink-640x360@26.png" frame-width="640" out-duration="700" yoyo color="#f2bc2b"></s-sprite-transition>
            <button class="btn btn--primary" onClick="playTransition()">
              Play the transition again
            </button>
          `
        }
      }
    },
    'duration': {
      title: 'Duration',
      editors: {
        html: {
          language: 'html',
          data: `
            <s-sprite-transition src="/demo/data/ink-640x360@26.png" frame-width="640" duration="2000" out-duration="700" yoyo color="#2b3438"></s-sprite-transition>
            <button class="btn btn--primary" onClick="playTransition()">
              Play the transition again
            </button>
          `
        }
      }
    },
    'api': {
      title: 'Api',
      editors: {
        html: {
          language: 'html',
          data: `
            <s-sprite-transition src="/demo/data/ink-640x360@26.png" frame-width="640" duration="1000" out-duration="700" yoyo color="#2b3438"></s-sprite-transition>
          `
        },
        js: {
          language: 'js',
          data: `
            import '@babel/polyfill'
            import SSpriteTransitionComponent from './dist/index'
            const $transition = document.querySelector('s-sprite-transition')

            // wait until the transition component is ready
            // cause it has to load the sprite, etc...
            $transition.addEventListener('ready', async (e) => {
              // go to the still frame
              $transition.goToStillFrame()
              // wait a little
              await timeout(2000)
              // play the out transition
              $transition.animateOut()
              // wait a little again
              await timeout(2000)
              // animate in then out
              await $transition.animateIn()
              // animate out
              await $transition.animateOut()
              // wait a little
              await timeout(2000)
              // go to a frame
              $transition.goToFrame(13)
            })

            // timeout utils
            function timeout(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
            }
          `
        }
      }
    }
  },

  // editors
  editors: {
    html: {
      language: "html",
      data: `
        <s-sprite-transition src="/demo/data/urban-full-480x270@60.png" frame-width="480" out-duration="700" still-frame="30" color="#2b3438"></s-sprite-transition>
        <button class="btn btn--primary" onClick="playTransition()">
          Play the transition again
        </button>
      `
    },
    css: {
      language: "scss",
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @import 'node_modules/coffeekraken-s-button-component/index';
        @include s-init();
        @include s-classes();
        @include s-typography-classes();
        @include s-button-classes();
        body {
          padding: s-space(bigger);
          overflow: hidden;
        }

        s-sprite-transition {
          @include s-fit(absolute);
        }
      `
    },
    js: {
      language: "js",
      data: `
        import '@babel/polyfill'
        import SSpriteTransitionComponent from './dist/index'

        const $transition = document.querySelector('s-sprite-transition')
        window.playTransition = function() {
          $transition.animateIn().then(() => {
            setTimeout(() => {
              $transition.animateOut().then(() => {
                console.log('Finished')
              })
            }, 1000)
          })
        }

        $transition.addEventListener('ready', (e) => {
          playTransition()
        })
      `
    }
  }
}
