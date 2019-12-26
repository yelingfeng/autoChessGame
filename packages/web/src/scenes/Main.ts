export class Main extends Phaser.Scene {
  constructor() {
    super('main')
  }

  preload() {
    this.load.image('bg', './static/assets/images/bg01.jpg')
  }

  create() {
    // 设置一个背景
    this.add.image(0, 0, 'bg').setOrigin(0, 0)
  }
}
