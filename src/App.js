/*
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
} */

import Buttons from "./components/Buttons"

function App() {
	return <Buttons />
}

export default App
