import { useDispatch, useSelector } from "react-redux"

const initialState = {
	entities: [],
}
const objeto1 = {
	a: "hola",
}
const objeto2 = {
	a: "adios",
}
const objeto3 = {
	a: "sayonara",
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "add":
			return {
				...state,
				entities: state.entities.concat({ ...action.payload }),
			}
		case "remove":
			var newEntities = state.entities.filter(function (x) {
				return x.a !== action.payload
			})
			return {
				...state,
				entities: newEntities,
			}

		default:
			break
	}

	return state
}

function Buttons() {
	const dispatch = useDispatch()
	const state = useSelector((x) => x)
	console.log(state)

	return (
		<div>
			<div>
				<button
					onClick={() => {
						dispatch({ type: "add", payload: objeto1 })
					}}>
					añadir objeto1
				</button>
				<button
					onClick={() => {
						dispatch({ type: "add", payload: objeto2 })
					}}>
					añadir objeto2
				</button>
				<button
					onClick={() => {
						dispatch({ type: "add", payload: objeto3 })
					}}>
					añadir objeto3
				</button>
			</div>

			<div>
				<button
					onClick={() => {
						dispatch({ type: "remove", payload: objeto1.a })
					}}>
					eliminar objeto1
				</button>
				<button
					onClick={() => {
						dispatch({ type: "remove", payload: objeto2.a })
					}}>
					eliminar objeto2
				</button>
				<button
					onClick={() => {
						dispatch({ type: "remove", payload: objeto3.a })
					}}>
					eliminar objeto3
				</button>
			</div>
		</div>
	)
}

export default Buttons

/*
import { useDispatch, useSelector } from "react-redux"

const zanahoria = {
	nombre: "zanahoria",
	precio: "1",
}
const calabaza = {
	nombre: "calabaza",
	precio: "2",
}

const papa = {
	nombre: "zanahoria",
	precio: "3",
}

const initialState = {
	entities: [],
}
//funcion reducer para añadir/eliminar elementos  a mi lista
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "añadir":
			return {
				...state,
				carro: state.entities.concat({ ...action.payload }),
			}

		default:
			break
	}

	return state
}
// Arrow function que me permite añadir elementos a mi state
export const Main = () => {
	const dispatch = useDispatch()
	const state = useSelector((x) => x)
	console.log(state)
	return (
		<div>
			<div>
				<button
					onClick={() => {
						dispatch({ type: "añadir", payload: papa })
					}}>
					añadir papa
				</button>

				<button
					onClick={() => {
						dispatch({ type: "añadir", payload: zanahoria })
					}}>
					añadir zanahoria
				</button>

				<button
					onClick={() => {
						dispatch({ type: "añadir", payload: calabaza })
					}}>
					añadir calabaza
				</button>
			</div>

			<div>
				<button
					onClick={() => {
						dispatch({ type: "eliminar", payload: "papa" })
					}}>
					eliminar papa
				</button>

				<button
					onClick={() => {
						dispatch({ type: "eliminar", payload: "zanahoria" })
					}}>
					eliminar zanahoria
				</button>

				<button
					onClick={() => {
						dispatch({ type: "eliminar", payload: "calabaza" })
					}}>
					eliminar calabaza
				</button>
			</div>
			<p>{state}</p>
		</div>
	)
}
*/
