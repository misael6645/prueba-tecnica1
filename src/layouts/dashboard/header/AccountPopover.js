import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// @mui
import { alpha } from '@mui/material/styles'
import {
	Box,
	Divider,
	Typography,
	Stack,
	MenuItem,
	Avatar,
	IconButton,
	Popover,
} from '@mui/material'
import { useUserStore } from '../../../store/userStore'
import { root } from '../../../config'
import { logoutUser } from '../../../api/users.api'

const MENU_OPTIONS = [
	{
		label: 'Dashboard',
		icon: 'eva:home-fill',
	},
]

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function AccountPopover() {
	const { user, reset } = useUserStore((state) => ({
		user: state.user,
		reset: state.reset
	}))
	const navigate = useNavigate()
	const [open, setOpen] = useState(null)

	const handleOpen = (event) => {
		setOpen(event.currentTarget)
	}

	const handleClose = () => {
		setOpen(null)
	}

	const gotoItem = () => {
		setOpen(null)
		navigate('dashboard')
	}

	const logout = async () => {
		setOpen(null)
		reset()
		navigate('/' + root)
		await logoutUser(user.id)
	}

	return (
		<>
			<IconButton
				onClick={handleOpen}
				sx={{
					p: 0,
					...(open && {
						'&:before': {
							zIndex: 1,
							content: '\'\'',
							width: '100%',
							height: '100%',
							borderRadius: '50%',
							position: 'absolute',
							bgcolor: (theme) => alpha(theme.palette.primary.main, 0.4),
						},
					}),
				}}
			>
				<Avatar { ...stringAvatar(user.nombre + ' ' + user.apellido)} />
			</IconButton>

			<Popover
				open={Boolean(open)}
				anchorEl={open}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				PaperProps={{
					sx: {
						p: 0,
						mt: 1.5,
						ml: 0.75,
						width: 180,
						'& .MuiMenuItem-root': {
							typography: 'body2',
							borderRadius: 0.75,
						},
					},
				}}
			>
				<Box sx={{ my: 1.5, px: 2.5 }}>
					<Typography variant='subtitle2' noWrap>
						{user.nombre} {user.apellido}
					</Typography>
					<Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
						{user.correo}
					</Typography>
				</Box>

				<Divider sx={{ borderStyle: 'dashed' }} />

				<Stack sx={{ p: 1 }}>
					{MENU_OPTIONS.map((option) => (
						<MenuItem key={option.label} onClick={gotoItem}>
							{option.label}
						</MenuItem>
					))}
				</Stack>

				<Divider sx={{ borderStyle: 'dashed' }} />

				<MenuItem onClick={logout} sx={{ m: 1, color: 'error.main' }}>
					Cerrar Sesion
				</MenuItem>
			</Popover>
		</>
	)
}
