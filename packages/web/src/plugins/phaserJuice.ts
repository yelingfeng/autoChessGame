/**
 * @author Conor Irwin <https://github.com/RetroVX>
 * @license {@link http://opensource.org/licenses/MIT|MIT License}
 * @classdesc
 * GitHub: https://github.com/retroVX/phaser3Juice <br>
 * Create juice effects with Phaser 3
 * @example
 * this.juice = new phaserJuice(this);
 * this.juice.shake(target);
 * @version: 1.1.0
 * @class phaserJuice
 * @param {Phaser.Scene} scene - The Scene the phaserJuice will be created in (this)
 */
export default class PhaserJuice {
  private scene!: Phaser.Scene

  private options!: any

  private target!: any

  constructor(scene: Phaser.Scene) {
    /**
     * Get 'this' from scene
     * @name phaserJuice.scene
     * @type {Object}
     * @since 1.0.0
     */

    this.scene = scene

    /**
     * Tween options that can be overidden depending on effect settings. <br>
     * Every tweenable effect has access to the delay, paused, onStart and onComplete parameters.
     * Depending on which parameters the effect uses, you can edit each effect using the optional
     * config parameter inside each effect. <br>
     * For example. To edit the shake effect to shake left and right instead of up and down <br>
     * .shake(sprite, {
     *     x: 5,
     *     y: 0
     * })
     * @name phaserJuice.options
     * @type {function}
     * @returns {object} returns the object containg the tween options
     * @param {object} effectOptions - the default options selected for each effect
     * @param {object} option - user passed in config to edit an effect
     * @returns {object} Returns the config options for tweens
     * @since 1.0.0
     */

    this.options = (effectOptions: any, option: any) => {
      option = option || {}

      // Fixes an issue where x or y is set to 0 then its ignored and uses the effectOption instead
      if (option.x === 0) {
        option.x = 0.00001
      } else if (option.y === 0) {
        option.y = 0.00001
      }

      const config = {
        x: option.x || effectOptions.x,
        y: option.y || effectOptions.y,
        alpha: option.alpha || effectOptions.alpha,
        scaleX: option.scaleX || effectOptions.scaleX,
        scaleY: option.scaleY || effectOptions.scaleY,
        angle: option.angle || effectOptions.angle,
        duration: option.duration || effectOptions.duration,
        yoyo: option.yoyo || effectOptions.yoyo,
        repeat: option.repeat || effectOptions.repeat,
        ease: option.ease || effectOptions.ease,
        delay: option.delay || effectOptions.delay,
        paused: option.paused || effectOptions.paused,
        onStart: option.onStart || effectOptions.onStart,
        onComplete: option.onComplete || effectOptions.onComplete
      }

      return config
    }
  }

  /**
   * @method phaserJuice.add
   * @type {function}
   * @param {object} target - sprite to chain
   * @return {function} for method chaining
   * @since 1.1.0
   */

  add(target: any) {
    this.target = target
    return this
  }

  /**
   * Shake a sprite <br>
   * The shake default config and options to overide if using the config parameter <br>
   * const shakeConfig = {
   *       x: 5,
   *       y: 0,
   *       duration: 50,
   *       yoyo: true,
   *       repeat: 8,
   *       ease: 'Bounce.easeInOut',
   *       delay: 0,
   *       paused: false,
   * }
   * @method phaserJuice.shake
   * @type {function}
   * @param {object} target - sprite to shake
   * @param {object} [config] - config to make edits to the effect
   * @param {boolean} [destroy=false] - destroy the tween when the onComplete event fires
   * @return {function} for method chaining
   * @since 1.0.0
   */

  shake(target: any, config: any, destroy?: any) {
    const { scene } = this
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target
    }
    if (destroy === undefined || destroy === null) {
      destroy = false
    }

    const shakeConfig = {
      x: 5,
      y: 0,
      duration: 50,
      yoyo: true,
      repeat: 8,
      ease: 'Bounce.easeInOut',
      delay: 0,
      paused: false
    }

    const options = this.options(shakeConfig, config)
    this.shakeTween = scene.tweens.add({
      targets: target,
      x: target.x + options.x,
      y: target.y - options.y,
      duration: options.duration,
      yoyo: options.yoyo,
      repeat: options.repeat,
      ease: options.ease,
      delay: options.delay,
      paused: options.paused,
      onStart(tween: any, t: any) {
        if (options.onStart !== undefined) {
          options.onStart(tween, t)
        }
      },
      onComplete(tween: any, t: any) {
        // run onComplete function if created
        if (options.onComplete !== undefined) {
          options.onComplete(tween, t)
        }

        if (destroy) {
          shake.remove()
        }
      }
    })

    return this
  }

  /**
   * Helper function to reset a sprite back to original <br>
   * Resets the sprite to alpha 1, scale 1, angle 0, tint none
   * @method phaserJuice.reset
   * @type {function}
   * @param {object} target - sprite to reset
   * @return {function} for method chaining
   * @since 1.0.0
   */

  reset(target: any) {
    // target is being chained
    if (target === undefined || target === null) {
      target = this.target
    }

    target.setAlpha(1)
    target.setScale(1)
    target.setAngle(0)
    target.setTint('0xffffff')

    return this
  }
}
