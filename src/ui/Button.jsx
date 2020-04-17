const primaryButton = (text = 'Play') => {
	return (
		<button class="button is-primary is-medium"
			style="width: 200px"
		>
			{ text }
		</button>
	)
}

const defaultButton = (text = 'Play') => {
	return (
		<button class="button is-medium"
			style="width: 200px"
		>
			{ text }
		</button>
	)
}

export {
	defaultButton,
	primaryButton
}
