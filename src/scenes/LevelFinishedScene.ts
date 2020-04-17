import Phaser from 'phaser'

import { primaryButton, defaultButton } from '../ui/Button'

export default class LevelFinishedScene extends Phaser.Scene
{
	constructor()
	{
		super('level-finished')
	}

	create(d: { moves: number, currentLevel: number })
	{
		const data = Object.assign({ moves: 0, currentLevel: 1 }, d)
		const width = this.scale.width
		const height = this.scale.height

		this.add.text(width * 0.5, height * 0.4, 'Level Complete!', {
			fontFamily: 'Righteous',
			color: '#d4fa00',
			fontSize: 48
		})
		.setOrigin(0.5)

		this.add.text(width * 0.5, height * 0.5, `Moves: ${data.moves}`, {
			fontFamily: 'Poppins'
		})
		.setOrigin(0.5)

		const retryButton = defaultButton('Retry') as HTMLElement
		const retry = this.add.dom(width * 0.5, height * 0.6, retryButton)
			.addListener('click').once('click', () => {
				this.sound.play('click')
				this.scene.start('game', { level: data.currentLevel })
			})

		if (data.currentLevel + 1 > 2)
		{
			return
		}

		const nextLevelButton = primaryButton('Next Level') as HTMLElement
		this.add.dom(width * 0.5, retry.y + retry.height * 1.2, nextLevelButton)
			.addListener('click').once('click', () => {
				this.sound.play('click')
				this.scene.start('game', { level: data.currentLevel + 1 })
			})
	}
}
