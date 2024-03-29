import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { Box, AppBar, Toolbar, IconButton } from '@mui/material'
import { bgBlur } from '../../../utils/cssStyles'
import Iconify from '../../../components/inconify/Iconify'

const NAV_WIDTH = 280

const HEADER_MOBILE = 64

const HEADER_DESKTOP = 80

const StyledRoot = styled(AppBar)(({ theme }) => ({
	...bgBlur({
		color: theme.palette.background.default,
	}),
	boxShadow: 'none',
	[theme.breakpoints.up('lg')]: {
		width: `calc(100% - ${NAV_WIDTH + 1}px)`,
	},
}))

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	minHeight: HEADER_MOBILE,
	[theme.breakpoints.up('lg')]: {
		minHeight: HEADER_DESKTOP,
		padding: theme.spacing(0, 5),
	},
}))

Header.propTypes = {
	onOpenNav: PropTypes.func,
}

export default function Header({ onOpenNav }) {
	return (
		<StyledRoot>
			<StyledToolbar>
				<IconButton
					onClick={onOpenNav}
					sx={{
						mr: 1,
						color: 'text.primary',
						display: { lg: 'none' },
					}}
				>
					<Iconify icon='eva:menu-2-fill' />
				</IconButton>

				<Box sx={{ flexGrow: 1 }} />

			</StyledToolbar>
		</StyledRoot>
	)
}
