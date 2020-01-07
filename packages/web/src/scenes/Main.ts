import PhaserJuice from '../plugins/phaserJuice'

export class Main extends Phaser.Scene {
  private player!: any

  private juice!: any

  private skulls!: Array<Phaser.GameObjects.Sprite>

  private bg!: any

  constructor() {
    super('main')
    this.juice = new PhaserJuice(this)
  }

  preload() {
    this.load.image('bg', './static/assets/images/bg01.jpg')
    this.load.image('player', './static/resources/cards/wei/generals/guojia.jpg')
    this.load.image('sw', './static/resources/cards/wei/base/01.jpg')

    this.load.audio('flameSound', './static/assets/sounds/fire.mp3')
    this.load.audio('hitSound', './static/assets/sounds/hit.mp3')

    this.load.atlas(
      'flares',
      './static/assets/particles/flares.png',
      './static/assets/particles/flares.json'
    )

    // this.load.image('red', './static/assets/particles/red.png');

    // this.load.atlas(
    //   'bolt',
    //   './static/assets/atlas/bolt-atlas.png',
    //   './static/assets/atlas/bolt-atlas.json'
    // )
    this.load.atlas(
      'flame',
      './static/assets/atlas/flames-atlas.png',
      './static/assets/atlas/flames-atlas.json'
    )
    // this.load.atlas(
    //   'ice',
    //   './static/assets/atlas/ice-atlas.png',
    //   './static/assets/atlas/ice-atlas.json'
    // )
  }

  create() {
    // this.juice = new phaserJuice(this)

    const bgGroup = this.add.group()

    // 设置一个背景
    const bg = this.add.image(0, 0, 'bg')
    bg.setOrigin(0, 0)
    this.bg = bg
    bgGroup.add(bg)
    // 创建一个player
    this.player = this.createPlayer(100, 120)
    console.log(this.player)
    // 创建一堆骷髅兵敌人
    this.skulls = []
    const offsetX = 10
    const offsetY = 500
    // for (let y = 1; y < 4; y += 1) {
    //   for (let x = 1; x < 4; x += 1) {
    //     const posx = x * 120 + (y % 2 ? 0 : 100) + offsetX
    //     const posy = y * 100 + offsetY
    //     this.createSkull(posx, posy)
    //   }
    // }
    for (let i = 1; i <= 5; i += 1) {
      const posx = i * 150 + offsetX
      const posy = offsetY
      this.createSkull(posx, posy)
    }

    this.createFireBall(this.player.x, this.player.y)
  }

  createFireBall(x: number, y: number): void {
    const me = this

    this.anims.create({
      frames: this.anims.generateFrameNames('flame', {
        prefix: 'fireball_',
        start: 1,
        end: 6,
        suffix: '.png',
        zeroPad: 4
      }),
      repeat: -1,
      key: 'move'
    })
    this.anims.create({
      key: 'hit',
      frames: this.anims.generateFrameNames('flame', {
        prefix: 'fireball_hit_',
        start: 1,
        end: 10,
        suffix: '.png',
        zeroPad: 4
      }),
      hideOnComplete: true
    })

    this.anims.create({
      key: 'smoke',
      frames: this.anims.generateFrameNames('flame', {
        prefix: 'smoke_jump_',
        start: 1,
        end: 10,
        suffix: '.png',
        zeroPad: 4
      })
    })
    // 创建火球音效
    const flameSound = this.sound.add('flameSound')
    const hitSound = this.sound.add('hitSound')

    // 创建火球
    const fireball = this.add.sprite(0, 0, 'flame')
    fireball.setScale(1.2).setOrigin(0.5)

    this.player.fireball = fireball

    const smoke = this.add.sprite(0, 0, 'flame')
    smoke.setOrigin(0.5)
    smoke.setScale(fireball.scaleX, fireball.scaleY)

    smoke.setVisible(false)
    fireball.setVisible(false)

    fireball.play('move', true)
    // start from the upper left of the game screen
    fireball.x = x
    fireball.y = y

    const targetSkull = Phaser.Math.RND.pick(this.skulls) as Phaser.GameObjects.Sprite
    const targetX = targetSkull.x
    const targetY = targetSkull.y

    const targetAngle = Phaser.Math.Angle.Between(fireball.x, fireball.y, targetX, targetY)
    fireball.rotation = targetAngle

    const particles = this.add.particles('flame')
    const smokeTrail = particles.createEmitter({
      frame: 'zsmoke.png',
      x,
      y,
      maxParticles: 400,
      lifespan: Phaser.Math.RND.between(1000, 3000),
      frequency: 80,
      on: false
    })
    smokeTrail.setGravity(0, 0)
    smokeTrail.setSpeedX({ random: [-30, -10] })
    smokeTrail.setSpeedY({ random: [-50, -25] })
    smokeTrail.setScale({ random: [1, 1.5] })
    smokeTrail.setAngle({ random: [10, 20] })
    // smokeTrail.setAlpha({ random: [0.3, 0.7] })
    fireball.smokeTrail = smokeTrail

    this.tweens.add({
      targets: fireball,
      duration: 1000,
      ease: 'Linear',
      rotation: targetAngle,
      x: targetX,
      y: targetY,
      onStart() {
        fireball.smokeTrail.start()
        fireball.setVisible(true)
        flameSound.play()
      },
      onComplete() {
        // fireball.smoke.revive()
        // fireball.smoke.position = fireball.getCenter
        // fireball.smoke.position = fireball.position
        smoke.setVisible(true)
        smoke.setPosition(fireball.x, fireball.y)
        // play the fireball hit animation
        fireball.play('hit', true)

        me.juice.shake(me.bg)

        // fireball.anims.load('smoke')
        // play the smoke animation
        smoke.play('smoke', true)
        hitSound.play()
        // fireball.smokeTrail.stop()
        fireball.smokeTrail.stop()
        flameSound.stop()
      }
    })
  }

  createPlayer(x: number, y: number) {
    const player = this.add.sprite(x, y, 'player')
    player.setScale(0.8)

    return player
  }

  createSkull(x: number, y: number) {
    const skull = this.add.sprite(x, y, 'sw')
    skull.setOrigin(0.5, 0.5)
    skull.setScale(0.6)
    this.skulls.push(skull)
  }

  update() {
    const { fireball } = this.player
    fireball.smokeTrail.forEachAlive(particle => {
      // by using each particle's lifespan
      particle.emitter.setAlpha(Phaser.Math.Clamp(particle.life / 1000, 0, 0.5))
    })

    // here we're making sure that each emitted particle from the emitter
    // emits from where the fireball position currently is
    fireball.smokeTrail.setPosition(fireball.x - 10, fireball.y - 10)
  }
}
