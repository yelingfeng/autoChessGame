/* eslint-disable */
import 'phaser'
import { MainScene } from './scenes/main-scene'
// main game configuration
const config: Phaser.Types.Core.GameConfig = {
  width: 1200,
  height: 600,
  type: Phaser.AUTO,
  scene: MainScene,
  parent: 'game'
}

// game class
export class Game extends Phaser.Game {
  constructor(config: any) {
    super(config)
  }
}

// when the page is loaded, create our game instance
window.addEventListener('load', () => {
  const game = new Game(config)
})
