import { useField } from 'formik'
import { Switch, FormControlLabel } from '@mui/material'

const SwitchInput = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props })

  return (
    <FormControlLabel
      control={<Switch {...field} />}
      label={label}
      error={meta.error && meta.touched ? true : false}
      helperText={meta.touched ? meta.error : null}
      {...props}
    />
  );
};

export default SwitchInput