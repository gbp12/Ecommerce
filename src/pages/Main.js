import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

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
//funcion reducer para añadir/eliminar elementos  a mi lista
export const reducer = (state = [], action) => {
	switch (action.type) {
		case "añadir":
			return state.concat(action.payload)

		case "eliminar":
			var newState = []
			for (let x = 0; x < state.length; x++) {
				if (state[x] !== action.payload) {
					newState.push(state[x])
				}
			}
			return newState

		default:
			return state
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
						dispatch({ type: "añadir", payload: "papa" })
					}}>
					añadir papa
				</button>

				<button
					onClick={() => {
						dispatch({ type: "añadir", payload: "zanahoria" })
					}}>
					añadir zanahoria
				</button>

				<button
					onClick={() => {
						dispatch({ type: "añadir", payload: "calabaza" })
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
