import SWebComponent from "coffeekraken-sugar/js/core/SWebComponent"
import STimer from "coffeekraken-sugar/js/classes/STimer"
import debounce from "coffeekraken-sugar/js/utils/functions/debounce"

export default class Component extends SWebComponent {
  /**
   * Default props
   * @definition    SWebComponent.defaultProps
   * @protected
   */
  static get defaultProps() {
    return {
      /**
       * The source of the sprite to use as transition
       * @prop
       * @type    {String}
       */
      src: null,

      /**
       * The sprite frame width
       * @prop
       * @type    {Number}
       */
      spriteWidth: null,

      /**
       * Specify which is the still frame where the transition will stop before continue
       * @prop
       * @type    {Integer}
       */
      stillFrame: null,

      /**
       * Specify if the out animation is the yoyo version of the in one
       * @prop
       * @type    {Boolean}
       */
      yoyo: false,

      /**
       * Set the transition duration wanted in ms
       * @prop
       * @type    {Integer}
       */
      duration: 1000,

      /**
       * Set the out duration if wanted a different one
       * @prop
       * @type    {Integer}
       */
      outDuration: null,

      /**
       * Specify a color to colorize the sprite if wanted
       * @prop
       * @type    {String}
       */
      color: null
    }
  }

  /**
   * Physical props
   * @definition    SWebComponent.physicalProps
   * @protected
   */
  static get physicalProps() {
    return []
  }

  /**
   * Required props
   * @definition    SWebComponent.requiredProps
   * @protected
   */
  static get requiredProps() {
    return ["src", "spriteWidth"]
  }

  /**
   * Css
   * @protected
   */
  static defaultCss(componentName, componentNameDash) {
    return `
      ${componentNameDash} {
        display : block;
        pointer-events: none;
      }
      ${componentNameDash}.active {
        pointer-events: all;
      }
    `
  }

  /**
   * The urban sprite
   * @type    {String}
   */

  /**
   * Component will mount
   * @definition    SWebComponent.componentWillMount
   * @protected
   */
  componentWillMount() {
    super.componentWillMount()
  }

  /**
   * Mount component
   * @definition    SWebComponent.componentMount
   * @protected
   */
  async componentMount() {
    super.componentMount()

    // create a canvas to draw in
    this._$canvas = document.createElement("canvas")
    this._ctx = this._$canvas.getContext("2d")
    this.appendChild(this._$canvas)
    this._setCanvasSize()

    // set the phase we're in
    this._phase = "in" // out

    // load the sprite as an image
    this._$spriteImg = await this._loadSprite()

    // calculate the number of frames that has the sprite
    this._totalFrames = this._$spriteImg.width / this.props.spriteWidth
    this._currentFrame = 0

    // init a timer to drive the animation
    this._timer = new STimer(this.props.duration, {
      tickCount: this.props.stillFrame || this._totalFrames
    })
    this._timer.onTick(() => {
      if (this.props.yoyo) {
        if (this._phase === "in") this._currentFrame += 1
        else this._currentFrame -= 1
      } else {
        this._currentFrame += 1
      }

      this._drawFrame(this._currentFrame)
    })
    this._timer.onComplete(() => {
      if (this._phase === "out") {
        this.classList.remove("active")
      }

      this._endedPromiseResolve(this)
    })

    // listen for resize through transitionend event
    this._resizeHandlerFn = debounce(this._resizeHandler.bind(this), 100)
    window.addEventListener("resize", this._resizeHandlerFn)

    // dispatch the ready event
    this.dispatchComponentEvent("ready")
  }

  /**
   * Component unmount
   * @definition    SWebComponent.componentUnmount
   * @protected
   */
  componentUnmount() {
    super.componentUnmount()
    this._timer.stop()
    this._timer.destroy()
    this._$spriteImg = null
    window.removeEventListener("resize", this._resizeHandlerFn)
  }

  /**
   * Component will receive prop
   * @definition    SWebComponent.componentWillReceiveProp
   * @protected
   */
  componentWillReceiveProp(name, newVal, oldVal) {
    super.componentWillReceiveProp(name, newVal, oldVal)
  }

  /**
   * Resize handler
   */
  _resizeHandler() {
    this._setCanvasSize()
  }

  /**
   * Load the sprite into an image
   */
  async _loadSprite() {
    return new Promise(resolve => {
      const img = new Image()
      img.onload = () => {
        resolve(img)
      }
      img.src = this.props.src
    })
  }

  /**
   * Set the canvas size
   */
  _setCanvasSize() {
    const [w, h] = [this.offsetWidth, this.offsetHeight]
    this._$canvas.width = w
    this._$canvas.height = h
  }

  /**
   * Draw a frame
   */
  _drawFrame(frame) {
    this._ctx.clearRect(0, 0, this.offsetWidth, this.offsetHeight)
    this._ctx.drawImage(
      this._$spriteImg,
      this.props.spriteWidth * (frame - 1),
      0,
      this.props.spriteWidth,
      this._$spriteImg.height,
      0,
      0,
      this.offsetWidth,
      this.offsetHeight
    )
    if (this.props.color) this._colorize(this.props.color)
  }

  /**
   * Colorize a frame
   * @param    {String}    color    The color to use
   */
  _colorize(color) {
    this._ctx.globalCompositeOperation = "source-atop"
    this._ctx.fillStyle = color
    this._ctx.fillRect(0, 0, this._$canvas.width, this._$canvas.height)
    this._ctx.globalCompositeOperation = "source-over"
  }

  /**
   * Animate the transition in
   * @return    {Promise}    A promised fulfilled when the transition is finished
   */
  animateIn() {
    return new Promise(resolve => {
      this._setCanvasSize()
      this.classList.add("active")
      this._endedPromiseResolve = resolve
      this._phase = "in"
      this._currentFrame = 0
      this._timer.tickCount(this.props.stillFrame || this._totalFrames)
      this._timer.duration(this.props.duration)
      this._timer.reset()
      this._timer.start()
    })
  }

  /**
   * Animate the transition out
   * @return    {Promise}    A promised fulfilled when the transition is finished
   */
  animateOut() {
    return new Promise(resolve => {
      this._endedPromiseResolve = resolve
      this._phase = "out"
      this._currentFrame = this.props.stillFrame || this._totalFrames
      this._timer.tickCount(
        this.props.stillFrame
          ? this._totalFrames - this.props.stillFrame
          : this._totalFrames
      )
      this._timer.duration(this.props.outDuration || this.props.duration)
      this._timer.reset()
      this._timer.start()
    })
  }
}
