import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Iconify from '../inconify/Iconify'
import { Link, Typography } from '@mui/material'
import '../../index.css'

// ----------------------------------------------------------------------

// eslint-disable-next-line react/display-name
const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
	const logo = (
		<div className='animation-logo'>
			<Iconify icon='mingcute:bank-fill' width={36} color='' />	
		</div>
	)

	if (disabledLink) {
		return <>{logo}</>
	}

	return (
		<Link
			to={'/home'}
			component={RouterLink}
			sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
		>
			{logo}
			<Typography variant='h5' align='start' sx={{ pl: 2, fontSize: 13, underline: 'none', fontWeight: 'bold' }}>
				Banco Credit Suisse
			</Typography>
		</Link>
	)
})

Logo.propTypes = {
	sx: PropTypes.object,
	disabledLink: PropTypes.bool,
}

export default Logo
