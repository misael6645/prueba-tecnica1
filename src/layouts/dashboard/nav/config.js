import { SiGoogleanalytics } from 'react-icons/si'
import { FaUser } from 'react-icons/fa'
import { MdOutlineScience } from 'react-icons/md'
import { AiFillControl } from 'react-icons/ai'
import { GiMaterialsScience } from 'react-icons/gi'
import { BsGraphDown } from 'react-icons/bs'

// todos los iconos son de react-icons https://react-icons.github.io/
const navConfig = [
	{
		title: 'dashboard',
		path: '/dashboard/app',
		icon: <SiGoogleanalytics size={20} />,
	},
	{
		title: 'Usuario',
		path: '/dashboard/user',
		icon: <FaUser size={20} />,
	},
	{
		title: 'Roles',
		path: '/dashboard/rol',
		icon: <AiFillControl size={20} />,
	},
	{
		title: 'laboratorios',
		path: '/dashboard/laboratorio',
		icon: <MdOutlineScience size={20} />,
	},
	{
		title: 'Recepcion Muestras',
		path: '/dashboard/recepcionLaboratorio',
		icon: <GiMaterialsScience size={20} />,
	},
	{
		title: 'Desvios',
		path: '/dashboard/desvio',
		icon: <BsGraphDown size={20} />,
	},
]

export default navConfig
