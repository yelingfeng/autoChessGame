// /**
//  *
//  */
// export abstract class Spell {
//   private icon!: any

//   private group!: Array<any>

//   private active = true

//   private cooldown!: any

//   private duration!: any

//   // x, y - icon position
//   // icon - key
//   // cooldown - amount in seconds before the spell can be cast again
//   // duration - amount in seconds for spells with duration eg, enchantments
//   constructor(
//     private _game: Phaser.Game,
//     x: number,
//     y: number,
//     icon: string,
//     cooldown: any,
//     duration: any
//   ) {
//     // we are not using the Phaser's group class
//     // because we want the z-order to work with some sprites
//     // so many of the spell sprites are added to the game.world
//     // but it's still handy to put them all in an array so we can just iterate each
//     this.group = []
//     // boolean flag that enables/disable casting of the spell again
//     this.active = true
//     // cooldown timer
//     this.cooldown = cooldown
//     // some spells, like firewall have a duration
//     this.duration = duration

//     // create each spell icons
//     this.createIcon(x, y, icon)

//     // and then create the necessary sprites, animations and emitters
//     this.create()
//   }

//   // 创建
//   abstract create(): void

//   // 执行
//   abstract perform(): void

//   // 更新
//   abstract update(): void

//   // 失效
//   abstract expire(): void

//   // to be overridden by child classes

//   cast(): void {
//     // don't allow casting if cooldown is still in effect
//     if (!this.active) return

//     // 执行每个子 咒语 的实际行为
//     this.perform()

//     // don't allow casting again
//     this.active = false

//     // activate the cooldown animation
//     this.icon.pie.progress = 0
//     const tween = _game.add
//       .tween(this.icon.pie)
//       .to({ progress: 1 }, this.cooldown, Phaser.Easing.Quadratic.InOut, true, 0)
//     tween.onComplete.add(() => {
//       this.active = true
//     })

//     // expire the spell if it has a duration
//     if (this.duration) {
//       _game.time.events.add(this.duration, () => {
//         this.expire()
//       })
//     }
//   }

//   createIcon(x: number, y: number, key: any) {
//     // create a group for the icon so they don't get sorted along with the sprites in the game.world
//     const iconGroup = _game.add.group()

//     // position the icon
//     const icon = _game.add.sprite(x, y, key)
//     icon.anchor.setTo(0.5, 0.5)

//     // create a progress pie on top of the icon
//     const pie = new PieProgress(game, icon.x, icon.y, 40, '0x000000')
//     pie.alpha = 0.5

//     // put a circle frame so we have rounded spell icons
//     const g = game.add.graphics(0, 0)
//     const radius = 40
//     g.lineStyle(20, 0x000000, 1)
//     g.anchor.setTo(0, 0)
//     const xo = icon.x
//     const yo = icon.y
//     g.moveTo(xo, yo + radius)
//     for (let i = 0; i <= 360; i++) {
//       const x = xo + Math.sin(i * (Math.PI / 180)) * radius
//       const y = yo + Math.cos(i * (Math.PI / 180)) * radius
//       g.lineTo(x, y)
//     }
//     iconGroup.add(icon)
//     iconGroup.add(g)
//     iconGroup.add(pie)

//     icon.pie = pie
//     this.icon = icon
//   }
// }
