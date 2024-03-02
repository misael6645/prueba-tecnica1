import { useField } from 'formik'
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers'

const DateTimeInput = ({ ...props }) => {
  const [field, meta, helpers] = useField({ ...props })
  const handleDateChange = (newValue) => {
    const validDate = dayjs.isDayjs(newValue) ? newValue : dayjs(newValue)
    helpers.setValue(validDate)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        {...field}
        label={props.label}
        error={ meta.error && meta.touched ? true : false }
        helperText={ meta.touched ? meta.error : null }
        value={field.value || dayjs()}
        onChange={handleDateChange}
        sx={{ width: '100%' }}
        viewRenderers={{
          hours: renderTimeViewClock,
          minutes: renderTimeViewClock,
          seconds: renderTimeViewClock,
        }} 
        {...props}
      />
    </LocalizationProvider>
  )
}

export default DateTimeInput