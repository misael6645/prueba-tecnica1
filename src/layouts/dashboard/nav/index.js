import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
	Box,
	Drawer,
} from '@mui/material'
import Iconify from '../../../components/inconify/Iconify'
import useResponsive from '../../../hooks/useResponsive'
import Scrollbar from '../../../components/scrollbar'
import NavSection from '../../../components/nav-section'
import Logo from '../../../components/logo/Logo'

const NAV_WIDTH = 280

Nav.propTypes = {
	openNav: PropTypes.bool,
	onCloseNav: PropTypes.func,
}

const CONFIG = [
	{ title: 'Solicitud de Tarjetas', path: '/solicitudTarjetas', icon: <Iconify icon='mdi:application-export' width={25} height={25} />},
	{ title: 'Tarjetas Solicitadas', path: '/tarjetasSolicitadas', icon: <Iconify icon='wpf:bank-cards' width={25} height={25} />},
	{ title: 'Tarjetas Aprobadas', path: '/tarjetasAprobadas', icon: <Iconify icon='material-symbols:order-approve-rounded' width={25} height={25} />},

]

export default function Nav({ openNav, onCloseNav }) {
	const { pathname } = useLocation()
	const isDesktop = useResponsive('up', 'lg')


	useEffect(() => {
		if (openNav) {
			onCloseNav()
		}
	}, [pathname])

	const renderContent = (
		<Scrollbar
			sx={{
				height: 1,
				'& .simplebar-content': {
					height: 1,
					display: 'flex',
					flexDirection: 'column',
				},
			}}
		>
			<Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
				<Logo />
			</Box>
			<NavSection data={CONFIG} />

			<Box sx={{ flexGrow: 1 }} />
		</Scrollbar>
	)

	return (
		<Box
			component='nav'
			sx={{
				flexShrink: { lg: 0 },
				width: { lg: NAV_WIDTH },
				bgColor: '#d6e9ff3d',
			}}
		>
			{isDesktop ? (
				<Drawer
					open
					variant='permanent'
					PaperProps={{
						sx: {
							width: NAV_WIDTH,
							bgcolor: (theme) =>
								theme.palette.mode === 'light' ? '#eff3f6' : 'primary.default',
							borderRightStyle: 'dashed',
						},
					}}
				>
					{renderContent}
				</Drawer>
			) : (
				<Drawer
					open={openNav}
					onClose={onCloseNav}
					ModalProps={{
						keepMounted: true,
					}}
					PaperProps={{
						sx: { width: NAV_WIDTH },
					}}
				>
					{renderContent}
				</Drawer>
			)}
		</Box>
	)
}
