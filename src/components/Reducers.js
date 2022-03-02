import { ListaVerduras, ListaFrutas } from "./Productos"
const initialState = {
	verduras: ListaVerduras,
	frutas: ListaFrutas,
	carro: [],
	esVisible: false,
	contadorProductos: 0,
	completed: false,
}
export const visibleReducer = (state = false, action) => {
	switch (action.type) {
		case "visibleChange":
			return !state
		default:
			return state
	}
}
export const carroReducer = (state = [], action) => {
	const objeto = action.payload
	switch (action.type) {
		case "add": {
			if (state.find((x) => x.nombre === objeto.nombre)) {
				const newCarro = state.map((x) =>
					x.nombre === objeto.nombre
						? {
								...x,
								cantidad: x.cantidad + 1,
						  }
						: x
				)

				return newCarro
			} else {
				return state.concat({ ...objeto })
			}
		}
		case "remove": {
			const newCarro = state.filter(function (x) {
				return x.nombre !== objeto.nombre
			})
			return newCarro
		}

		case "completed": {
			return []
		}

		default:
			return state
	}
}

export const contadorReducer = (state = {}, action) => {
	var newContador = state.contadorProductos

	switch (action.type) {
		case "add":
			return (newContador += 1)

		case "remove":
			var restante = 0
			const filter = state.carro.filter(function (x) {
				if (x.nombre === action.payload.nombre) {
					restante += x.cantidad
				}
			})
			return (newContador -= restante)

		case "completed": {
			return 0
		}
	}
	return state.contadorProductos
}

export const completeChanger = (state = false, action) => {
	switch (action) {
		case "completed":
			state = true
			return state

		default:
			return state
	}
}
export const reducer = (state = initialState, action) => {
	return {
		verduras: initialState.verduras,
		frutas: initialState.frutas,
		carro: carroReducer(state.carro, action),
		esVisible: visibleReducer(state.esVisible, action),
		contadorProductos: contadorReducer(state, action),
		completed: completeChanger(state.completed),
	}
}
