import { useState } from 'react'
import {
  Container,
  Card,
  CardContent,
  Stack,
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  Paper,
  TableBody,
  IconButton,
  Popover,
  MenuItem,
} from '@mui/material'
import { useDataStore } from '../store/dataStore'
import Iconify from '../components/inconify/Iconify'
import Scrollbar from '../components/scrollbar/Scrollbar'
import { useSnackbar } from 'notistack'

const TarjetaSolicitadaPage = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [indexSelected, setIndexSelected] = useState(null)
  const [open, setOpen] = useState(false)
  const { data, setData, setDataAprobado, dataAprobado } = useDataStore((state) => ({
    data: state.data === null || state.data === undefined ? [] : state.data,
    setData: state.setData,
    setDataAprobado: state.setDataAprobado,
    dataAprobado: state.dataAprobado
  }))

  const handleOpenMenu = (event, index) => {
		setOpen(event.currentTarget)
    setIndexSelected(index)
	}

  const handleCloseMenu = () => {
		setOpen(null)
	}

  const aprobar = () => {
    const auxData = [...data]
    const element = auxData[indexSelected]

    auxData.splice(indexSelected, 1)
    setData([...auxData])

    let auxDataAprobado = []
    if (dataAprobado === null || dataAprobado === undefined) auxDataAprobado = []
    else auxDataAprobado = [...dataAprobado]
    const tam = auxDataAprobado.length
    setDataAprobado([...auxDataAprobado, { ...element, montoTarjeta: 0.00, id: tam }])
    enqueueSnackbar('Tarjeta aprobada Correctamente', { variant: 'success' } )
		setOpen(null)
  }

  const rechazar = () => {
    const auxData = [...data]
    auxData.splice(indexSelected, 1)
    setData([...auxData])
    enqueueSnackbar('Tarjeta rechazada Correctamente', { variant: 'info' } )
		setOpen(null)
  }

  return (
    <Container>
       <Stack
        direction='row'
        alignItems='center'
        spacing={2}
        justifyContent='start'
        mb={3}
      >
      <Typography variant='h4' gutterBottom>
         Tarjetas Solicitadas
      </Typography> 
      </Stack>
      <Card>
        <CardContent>
          <TableContainer component={Paper}>
          <Scrollbar>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell align='right'>Documento</TableCell>
                  <TableCell align='right'>Correo</TableCell>
                  <TableCell align='right'>Teléfono</TableCell>
                  <TableCell align='right'></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow
                    key={row.nombre}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {row.nombre}
                    </TableCell>
                    <TableCell align='right'>
                      {row.documentoIdentidad}
                    </TableCell>
                    <TableCell align='right'>{row.correo}</TableCell>
                    <TableCell align='right'>{row.telefono}</TableCell>
                    <TableCell align='right'>
											<IconButton
												size='large'
												color='inherit'
												onClick={(e) => handleOpenMenu(e, index)}
											>
												<Iconify icon={'eva:more-vertical-fill'} />
											</IconButton>
										</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Scrollbar>
          </TableContainer>
          <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleCloseMenu}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
              sx: {
                p: 1,
                width: 140,
                '& .MuiMenuItem-root': {
                  px: 1,
                  typography: 'body2',
                  borderRadius: 0.75,
                },
              },
            }}
          >
            <MenuItem onClick={() => aprobar()}>
              <Iconify icon={'icon-park-solid:check-one'} sx={{ mr: 2 }} />
              Aprobar
            </MenuItem>

            <MenuItem onClick={() => rechazar()} sx={{ color: 'error.main' }}>
              <Iconify icon={'carbon:close-filled'} sx={{ mr: 2 }} />
              Rechazar
            </MenuItem>
          </Popover>
        </CardContent>
      </Card>
    </Container>
  )
}

export default TarjetaSolicitadaPage