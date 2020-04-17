import { Direction } from '../consts/Direction'

const TILE_SIZE = 64

const offsetForDirection = (direction: Direction, steps = 1) => {
	const multipler = steps - 1
	switch (direction)
	{
		case Direction.Left:
			return {
				x: (TILE_SIZE * -multipler) - 32,
				y: 32
			}

		case Direction.Right:
			return {
				x: (TILE_SIZE * multipler) + 96,
				y: 32
			}

		case Direction.Up:
			return {
				x: 32,
				y: (TILE_SIZE * -multipler) - 32
			}

		case Direction.Down:
			return {
				x: 32,
				y: (TILE_SIZE * multipler) + 96
			}

		default:
			return { x: 0, y: 0 }
	}
}

export {
	offsetForDirection
}
