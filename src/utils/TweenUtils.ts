import { Direction } from "../consts/Direction"

interface IBaseTween
{
	x?: number | string
	y?: number | string
	duration?: number
}

const baseTweenForDirection = (direction: Direction) => {
	const baseTween: IBaseTween = {
		duration: 500
	}

	switch (direction)
	{
		case Direction.Down:
			baseTween.y = '+=64'
			break

		case Direction.Up:
			baseTween.y = '-=64'
			break

		case Direction.Left:
			baseTween.x = '-=64'
			break

		case Direction.Right:
			baseTween.x = '+=64'
			break
	}

	return baseTween
}

export {
	baseTweenForDirection
}
