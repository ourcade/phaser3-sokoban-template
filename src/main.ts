import Phaser from 'phaser'

import Preloader from './scenes/Preloader'
import Game from './scenes/Game'
import LevelFinishedScene from './scenes/LevelFinishedScene'

const config = {
	type: Phaser.AUTO,
	parent: 'phaser',
	dom: {
		createContainer: true
	},
	width: 640,
	height: 512,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [Preloader, Game, LevelFinishedScene]
}

export default new Phaser.Game(config)
