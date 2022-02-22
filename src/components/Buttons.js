import { useDispatch, useSelector } from "react-redux"
import { Img, ButtonProduct, StyledLista } from "./Styles"

const initialState = {
	productos: [
		{
			nombre: "papa",
			precio: 4,
			cantidad: 1,
			img: "https://www.cocinayvino.com/wp-content/uploads/2017/07/16194971_ml-e1499974317365.jpg",
		},
		{
			nombre: "tomate",
			precio: 9,
			cantidad: 1,
			img: "https://www.lovemysalad.com/sites/default/files/styles/image_530x397/public/tomates_-_vladimir_morozov.jpg?itok=XMg8FUqr",
		},
		{
			nombre: "esparrago",
			precio: 13,
			cantidad: 1,
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8xpO_L979dWkjQf_Kf2Gz0tfXsRMBSmLoadptjoeMY_NuC2RTzdOrpglKxzVn2oD9-k&usqp=CAU",
		},
	],
	carro: [],
	esVisible: false,
	contadorProductos: 0,
}

export const Reducer = (state = initialState, action) => {
	const producto = action.payload
	switch (action.type) {
		case "add":
			if (state.carro.find((x) => x.nombre === producto.nombre)) {
				const newCarro = state.carro.map((x) =>
					x.nombre === producto.nombre
						? {
								...x,
								cantidad: x.cantidad + 1,
						  }
						: x
				)

				return { ...state, carro: newCarro, contadorProductos: state.contadorProductos + 1 }
			} else {
				return {
					...state,
					carro: state.carro.concat({ ...producto }),
					contadorProductos: state.contadorProductos + 1,
				}
			}

		case "remove":
			var restante = 0

			const newCarro = state.carro.filter(function (x) {
				if (x.nombre === producto) {
					restante += x.cantidad
				}
				return x.nombre !== producto
			})
			var newContador = state.contadorProductos - restante

			return {
				...state,
				carro: newCarro,
				contadorProductos: newContador,
			}

		case "visibleChange":
			return {
				...state,
				esVisible: !state.esVisible,
			}
	}

	return state
}

export const ButtonPapa = () => {
	const dispatch = useDispatch()
	const state = useSelector((x) => x)
	console.log(state)

	return (
		<div>
			<Img src={initialState.productos[0].img} />
			<div>
				<ButtonProduct
					onClick={() => {
						dispatch({ type: "add", payload: state.productos[0] })
					}}>
					comprar papas
				</ButtonProduct>
				<ButtonProduct
					onClick={() => {
						dispatch({ type: "remove", payload: "papa" })
					}}>
					delete papas
				</ButtonProduct>
			</div>
		</div>
	)
}

export const ButtonTomate = () => {
	const dispatch = useDispatch()
	const state = useSelector((x) => x)

	return (
		<div>
			<Img src={initialState.productos[1].img} />

			<div>
				<ButtonProduct
					onClick={() => {
						dispatch({ type: "add", payload: state.productos[1] })
					}}>
					comprar tomates
				</ButtonProduct>
				<ButtonProduct
					onClick={() => {
						dispatch({ type: "remove", payload: "tomate" })
					}}>
					delete tomates
				</ButtonProduct>
			</div>
		</div>
	)
}

export const ButtonEsparrago = () => {
	const dispatch = useDispatch()
	const state = useSelector((x) => x)

	return (
		<div>
			<Img src={initialState.productos[2].img} />
			<div>
				<ButtonProduct
					onClick={() => {
						dispatch({ type: "add", payload: state.productos[2] })
					}}>
					comprar esparragos
				</ButtonProduct>

				<ButtonProduct
					onClick={() => {
						dispatch({ type: "remove", payload: "esparrago" })
					}}>
					delete esparragos
				</ButtonProduct>
			</div>
		</div>
	)
}

export const ButtonLista = () => {
	const state = useSelector((x) => x)

	const Element = () => {
		return (
			<div>
				{state.carro.map((x) => (
					<StyledLista key={Math.random()}>
						{x.cantidad}
						{x.nombre}(s)
					</StyledLista>
				))}
			</div>
		)
	}
	return <div>{state.esVisible ? <Element /> : null}</div>
}
