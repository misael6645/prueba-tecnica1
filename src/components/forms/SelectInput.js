import { useField } from 'formik'
import { TextField, MenuItem } from '@mui/material'

const SelectInput = ({ options, ...props }) => {
	const [field, meta] = useField({ ...props })

	return (
		<TextField
			{...field}
			select
			error={meta.error && meta.touched ? true : false}
			helperText={meta.touched ? meta.error : null}
			{...props}
		>
			{options.map((option) => (
				<MenuItem key={option.id} value={String(option.id)}>
					{option.nombre}
				</MenuItem>
			))}
		</TextField>
	)
}

export default SelectInput
