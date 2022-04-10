import { createGlobalStyle } from 'styled-components'
import { themes } from './ColorsStyle'

export const Globalstyle = createGlobalStyle`
	body {
		background: ${themes.light.backgroundColor};
	}

	@media (prefers-color-scheme: dark) {
		background: ${themes.dark.background};
	}
`
