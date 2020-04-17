import Phaser from 'phaser'

import WebFontFile from '../files/WebFontFile'

export default class Preloader extends Phaser.Scene
{
	constructor()
	{
		super('preloader')
	}

	preload()
	{
		const fonts = new WebFontFile(this.load, [
			'Poppins',
			'Righteous'
		])
		this.load.addFile(fonts)

		this.load.audio('game-music', 'assets/music/CaveLoop.wav')
		this.load.audio('confirmation', 'assets/sfx/confirmation_001.wav')
		this.load.audio('move', 'assets/sfx/maximize_008.wav')
		this.load.audio('error', 'assets/sfx/error_006.wav')
		this.load.audio('click', 'assets/sfx/click2.wav')
	}

	create()
	{
		this.sound.play('game-music', {
			loop: true,
			volume: 0.05
		})

		this.scene.start('game', { level: 1 })
		// this.scene.start('level-finished', { moves: 10, currentLevel: 1 })
	}
}
