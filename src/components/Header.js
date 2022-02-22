import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { StyledHeader, ButtonCarrito } from "./Styles"
export const Header = () => {
	const dispatch = useDispatch()
	const state = useSelector((x) => x)
	return (
		<StyledHeader>
			<h3>Logo</h3>

			<ButtonCarrito onClick={() => dispatch({ type: "visibleChange" })}>Ver Carrito ({state.contadorProductos}) </ButtonCarrito>
		</StyledHeader>
	)
}

export default Header
