import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './layouts/dashboard/DashboardLayout'
import SolicitudTarjetaPage from './pages/SolitudTarjetaPage'
import TarjetaSolicitadaPage from './pages/TarjetaSolicitadaPage'
import TarjetaAprobadaPage from './pages/TarjetaAprobadaPage'

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          element: (<Navigate to='/solicitudTarjetas' />),
          index: true,
        },
        { path: 'solicitudTarjetas', element: <SolicitudTarjetaPage /> },
        { path: 'tarjetasSolicitadas', element: <TarjetaSolicitadaPage /> },
        { path: 'tarjetasAprobadas', element: <TarjetaAprobadaPage /> }
      ]
    }
  ])

  return routes
}