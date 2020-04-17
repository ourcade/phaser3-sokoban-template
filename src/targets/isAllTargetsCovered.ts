import { targetColorToBoxColor } from '../utils/ColorUtils'

const isAllTargetsCovered = (targetsCoveredByColor: { [key: number]: number }, boxesByColor: { [key: number]: Phaser.GameObjects.Sprite[] }) => {
	const targetColors = Object.keys(targetsCoveredByColor)
	for (let i = 0; i < targetColors.length; ++i)
	{
		const targetColor = parseInt(targetColors[i])
		const boxColor = targetColorToBoxColor(targetColor)
		if (!(boxColor in boxesByColor))
		{
			continue
		}

		const numBoxes = boxesByColor[boxColor].length
		const numCovered = targetsCoveredByColor[targetColor]

		if (numCovered < numBoxes)
		{
			return false
		}
	}

	return true
}

export default isAllTargetsCovered
