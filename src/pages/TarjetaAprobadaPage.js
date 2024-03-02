import {
  Container,
  Stack,
  Card,
  CardContent,
  Typography
} from '@mui/material'
import { useDataStore } from '../store/dataStore'
import { DataGrid } from '@mui/x-data-grid'

const COLUMNS = [
  { field: 'nombre', headerName: 'Nombre', width: 180, filterable: false },
  { field: 'correo', headerName: 'Correo', width: 180 },
  { field: 'documentoIdentidad', headerName: 'Identificación', width: 180 },
  { field: 'telefono', headerName: 'Teléfono', width: 180 },
  { field: 'montoTarjeta', headerName: 'Monto Aprobado', width: 180, editable: true, type: 'number' },
]

const TarjetaAprobadaPage = () => {
  const { dataAprobado, setDataAprobado } = useDataStore((state) => ({
    dataAprobado: state.dataAprobado === null || state.dataAprobado === undefined ? [] : state.dataAprobado,
    setDataAprobado: state.setDataAprobado
  }))

  const handleChangeCell = (params, event) => {
    const id = params.row.id
    const auxData = [...dataAprobado]
    const index = auxData.findIndex((item) => item.id === id )
    auxData[index] = { ...params.row, montoTarjeta: parseInt(event.target.value) }
    setDataAprobado(auxData)
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
          Solicitud de Tarjeta de Crédito
        </Typography>
      </Stack>
      <Card>
        <CardContent>
          <DataGrid
            rows={dataAprobado}
            columns={COLUMNS}
            editMode='cell'
            onCellEditStop={(params, event) => handleChangeCell(params, event)}
          />
        </CardContent>
      </Card>
    </Container>
  )
}

export default TarjetaAprobadaPage