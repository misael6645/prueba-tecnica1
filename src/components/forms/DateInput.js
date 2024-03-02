import { useField } from 'formik'
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const DateInput = ({ ...props }) => {
  const [field, meta, helpers] = useField({ ...props })
  const handleDateChange = (newValue) => {
    const validDate = dayjs.isDayjs(newValue) ? newValue : dayjs(newValue)
    helpers.setValue(validDate)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...field}
        label={props.label}
        error={ meta.error && meta.touched ? true : false }
        helperText={ meta.touched ? meta.error : null }
        value={field.value || dayjs()}
        onChange={handleDateChange}
        sx={{ width: '100%' }}
        {...props}
      />
    </LocalizationProvider>
  )
}

export default DateInput