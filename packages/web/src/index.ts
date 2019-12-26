import 'phaser'
import { Main } from './scenes/Main'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'renderCanvas',
  width: 1024,
  height: 600,
  scene: [Main]
}

const game = new Phaser.Game(config)
console.log(game)
