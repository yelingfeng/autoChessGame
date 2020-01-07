// import { Spell } from './spell'

// export class FireStorm extends Spell {
//   create() {
//     for (let i = 0; i < 5; i += 1) {
//       // setup an emitter for each fireball for the smoke trail
//       const smokeTrail = this.game.add.emitter(0, 0, 400)
//       // limit the emitter width
//       smokeTrail.width = 10
//       // limit the amount of speed and rotation
//       smokeTrail.setXSpeed(-30, -10)
//       smokeTrail.setYSpeed(-50, -25)
//       smokeTrail.setRotation(10, 20)
//       // random size, alpha
//       smokeTrail.setScale(1, 1.5)
//       smokeTrail.setAlpha(0.3, 0.7, 3000)
//       // no gravity, we want them going up
//       smokeTrail.gravity = 0
//       // just pull from the existing spritesheet
//       smokeTrail.makeParticles('flame', ['zsmoke.png'])
//       // start the emitter but pause it until the spell is cast
//       smokeTrail.start(false, game.rnd.between(1000, 4000), 150)
//       smokeTrail.on = false

//       // our fireball sprite
//       const fireball = game.add.sprite(0, 0, 'flame')
//       fireball.scale.set(game.rnd.realInRange(0.5, 1))
//       fireball.anchor.set(0.5)
//       // there 2 animations to play
//       // 1. while it's moving and 2. when it hits the ground
//       const move = fireball.animations.add('move', [0, 1, 2, 3, 4, 5])
//       const hit = fireball.animations.add('hit', [6, 7, 8, 9, 10, 11, 12, 13, 14])

//       // we're adding another animation once it hits the ground
//       // but we need to create a separate sprite for the smoke animation
//       // because we play this together with the fireball hit animation
//       const smoke = game.add.sprite(0, 0, 'flame')
//       smoke.animations.add('smoke', [21, 22, 23, 24, 25, 26, 27, 28, 29, 30])
//       smoke.anchor.set(0.5)
//       smoke.scale.setTo(fireball.scale.x, fireball.scale.y)

//       // we start with these hidden away
//       fireball.kill()
//       smoke.kill()

//       // store reference
//       fireball.smoke = smoke
//       fireball.smokeTrail = smokeTrail

//       this.group.push(fireball)
//     }
//   }

//   perform() {
//     this.group.forEach(fireball => {
//       // we start with reving and resuming the emitters
//       fireball.revive()
//       fireball.smokeTrail.on = true
//       // play the animation
//       fireball.play('move', game.rnd.between(15, 25), true)
//       // start from the upper left of the game screen
//       fireball.x = game.rnd.between(0, 100)
//       fireball.y = 0

//       // randomly hit where the zombies are standing
//       const targetX = game.rnd.between(200, game.world.width)
//       const targetY = game.rnd.between(200, 350)
//       // make it face and target the ground
//       const targetAngle = game.math.angleBetween(fireball.x, fireball.y, targetX, targetY)
//       fireball.rotation = targetAngle

//       // tween the movement
//       const tween = game.add
//         .tween(fireball)
//         .to(
//           { x: targetX, y: targetY },
//           game.rnd.between(1000, 2000),
//           Phaser.Easing.Linear.None,
//           true
//         )
//       tween.onComplete.add(() => {
//         // when the fireball hits the ground, we do the following:

//         // show the smoke sprite animation
//         fireball.smoke.revive()
//         fireball.smoke.position = fireball.position

//         // play the fireball hit animation
//         fireball.play('hit', game.rnd.between(15, 20), false, true)
//         // play the smoke animation
//         fireball.smoke.play('smoke', game.rnd.between(10, 15), false, true)
//         // turn off the somke trail emitter;
//         fireball.smokeTrail.on = false
//         // and we shake the screen for each fireball that hits the ground
//         game.juicy.shake()
//       })
//     })
//   }

//   update() {
//     this.group.forEach(fireball => {
//       // for each smoke trail particle, we slowly fade them out
//       fireball.smokeTrail.forEachAlive(particle => {
//         // by using each particle's lifespan
//         particle.alpha = game.math.clamp(particle.lifespan / 1000, 0, 0.5)
//       })

//       // here we're making sure that each emitted particle from the emitter
//       // emits from where the fireball position currently is
//       fireball.smokeTrail.x = fireball.x
//       fireball.smokeTrail.y = fireball.y
//     })
//   }

//   expire() {
//     console.log(1)
//   }
// }
