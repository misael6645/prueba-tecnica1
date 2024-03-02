import { useState } from 'react'
import { Formik, Form } from 'formik'
import TextInput from '../components/forms/TextInput'
import { 
  Card,
  Stack,
  Button,
  Container,
  Typography,
  CardContent
} from '@mui/material'
import { useDataStore } from '../store/dataStore'
import { useSnackbar } from 'notistack'

const validateSolicitudTarjeta = (values) => {
  const errors = {}
  
  if (!values.nombre) {
    errors.nombre = 'este campo no puede estar vacio'
  }
  
  if (!values.documentoIdentidad) {
    errors.documentoIdentidad = 'este campo no puede estar vacio'
  }

  if (!values.correo) {
    errors.correo = 'este campo no puede estar vacio'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.correo)) {
    errors.correo = 'formato de correo no válido'
  }
  
  if (!values.telefono) {
    errors.telefono = 'este campo no puede estar vacio'
  }

  return errors
}

const SolicitudTarjetaPage = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { data, setData } = useDataStore((state) => ({
    data: state.data,
    setData: state.setData
  }))



  const initialValues = {
    nombre: '',
    documentoIdentidad: '',
    correo: '',
    telefono: ''
  }

  const crearSolicitud = (values, resetForm) => {
    let auxData = []
    if (data === null || data === undefined) auxData = []
    else auxData = [...data]
    enqueueSnackbar('Solicitud creada Correctamente', { variant: 'success' } )
    setData([...auxData, values])
    resetForm()
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
          <Container maxWidth='xs'>
            <Formik
              initialValues={initialValues}
              validate={(values) => validateSolicitudTarjeta(values)}
              onSubmit={(values, { resetForm }) => crearSolicitud(values, resetForm)}
            >
              <Form>
                <Stack
                  direction='column'
                  mt={3}
                  alignItems='center'
                  justifyContent='center'
                  spacing={3}
                >
                  <TextInput
                    type='text'
                    variant='outlined'
                    label='Nombre'
                    name='nombre'
                    fullWidth
                  />
                  <TextInput
                    variant='outlined'
                    label='Documento de Identidad'
                    name='documentoIdentidad'
                    fullWidth
                  />
                  <TextInput
                    variant='outlined'
                    label='Correo Electrónico'
                    name='correo'
                    fullWidth
                  />
                  <TextInput
                    type='number'
                    variant='outlined'
                    label='Teléfono'
                    name='telefono'
                    fullWidth
                  />
                </Stack>
                <Stack spacing={3} mt={4} alignItems='end'>
									<Button type='submit' variant='contained'>
										Guardar
									</Button>
								</Stack>
              </Form>
            </Formik>
          </Container> 
        </CardContent>
      </Card>
    </Container>
  )
}

export default SolicitudTarjetaPage