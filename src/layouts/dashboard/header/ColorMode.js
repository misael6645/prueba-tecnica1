import { useTheme } from '@mui/material/styles'
import { useUserStore } from '../../../store/userStore'
import { IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

const ColorMode = () => {
	const theme = useTheme()
	const { mode, toggleColorMode } = useUserStore((state) => ({
		mode: state.mode,
		toggleColorMode: state.toggleColorMode,
	}))

	const setModeLocalStorage = () => {
		toggleColorMode()
		const newTheme = mode === 'dark' ? 'light' : 'dark'
		localStorage.setItem('mode', JSON.stringify({ mode: newTheme }))
	}

	return (
		<IconButton
			sx={{ ml: 1, color: mode === 'dark' ? 'palette.primary.dark' : 'black' }}
			onClick={setModeLocalStorage}
			color='inherit'
		>
			{theme.palette.mode === 'dark' ? (
				<Brightness7Icon />
			) : (
				<Brightness4Icon />
			)}
		</IconButton>
	)
}

export default ColorMode
