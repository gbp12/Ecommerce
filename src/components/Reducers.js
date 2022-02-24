const initialState = {
	productos: [
		{
			nombre: "papa",
			cantidad: 1,
			precio: 4,
			img: "https://www.cocinayvino.com/wp-content/uploads/2017/07/16194971_ml-e1499974317365.jpg",
		},
		{
			nombre: "tomate",
			cantidad: 1,
			precio: 9,
			img: "https://www.lovemysalad.com/sites/default/files/styles/image_530x397/public/tomates_-_vladimir_morozov.jpg?itok=XMg8FUqr",
		},
		{
			nombre: "esparrago",
			cantidad: 1,
			precio: 13,
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8xpO_L979dWkjQf_Kf2Gz0tfXsRMBSmLoadptjoeMY_NuC2RTzdOrpglKxzVn2oD9-k&usqp=CAU",
		},
		{
			nombre: "alcachofa",
			cantidad: 1,
			precio: 23,
			img: "https://lacosecha.pe/wp-content/uploads/2020/11/alcachofa.jpg",
		},
	],
	carro: [],
	esVisible: false,
	contadorProductos: 0,
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
	}
	return state.contadorProductos
}
export const reducer = (state = initialState, action) => {
	return {
		productos: initialState.productos,
		carro: carroReducer(state.carro, action),
		esVisible: visibleReducer(state.esVisible, action),
		contadorProductos: contadorReducer(state, action),
	}
}
