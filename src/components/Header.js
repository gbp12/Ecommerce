import React from "react"
import { useDispatch } from "react-redux"

import { StyledHeader, ButtonCarrito } from "./Styles"
export const Header = () => {
	const dispatch = useDispatch()
	return (
		<StyledHeader>
			<h3>Logo</h3>

			<ButtonCarrito onClick={() => dispatch({ type: "visibleChange" })}>Carrito</ButtonCarrito>
		</StyledHeader>
	)
}

export default Header
