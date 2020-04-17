import * as Color from '../consts/Color'

const boxColorToTargeColor = (boxColor: number) => {
	switch (boxColor)
	{
		default:
		case Color.BoxOrange:
			return Color.TargetOrange

		case Color.BoxRed:
			return Color.TargetRed

		case Color.BoxBlue:
			return Color.TargetBlue

		case Color.BoxGreen:
			return Color.TargetGreen

		case Color.BoxGrey:
			return Color.TargetGrey
	}
}

const targetColorToBoxColor = (targetColor: number) => {
	switch (targetColor)
	{
		default:
		case Color.TargetOrange:
			return Color.BoxOrange

		case Color.TargetRed:
			return Color.BoxRed

		case Color.TargetBlue:
			return Color.BoxBlue

		case Color.TargetGreen:
			return Color.BoxGreen

		case Color.TargetGrey:
			return Color.BoxGrey
	}
}

export {
	boxColorToTargeColor,
	targetColorToBoxColor
}
