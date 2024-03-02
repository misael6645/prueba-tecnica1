import { create } from 'zustand'

const getDataLocalStorage = () => {
	const data = localStorage.getItem('data')
	return JSON.parse(data)
}

const getDataAprobadoLocalStorage = () => {
	const dataAprobado = localStorage.getItem('dataAprobado')
	return JSON.parse(dataAprobado)
}

const setDataLocalStorage = (values) => {
	localStorage.setItem('data', JSON.stringify(values))
}

const setDataAprobadoLocalStorage = (values) => {
	localStorage.setItem('dataAprobado', JSON.stringify(values))
}

export const useDataStore = create((set) => ({
	data: getDataLocalStorage(),
	dataAprobado: getDataAprobadoLocalStorage(),
	setData: (newValues) => {
		setDataLocalStorage(newValues)
		set((state) => ({ data: newValues }))
	},
	setDataAprobado: (newValues) => {
		setDataAprobadoLocalStorage(newValues)
		set((state) => ({ dataAprobado: newValues }))
	},
}))