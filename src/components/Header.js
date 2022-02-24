import React from "react"
import { useDispatch } from "react-redux"
import { BubbleAlert } from "./Bubble"

import { StyledHeader, ButtonCarrito } from "./Styles"
export const Header = () => {
	const dispatch = useDispatch()
	return (
		<StyledHeader>
			<h3>Shop</h3>

			<ButtonCarrito onClick={() => dispatch({ type: "visibleChange" })}>
				Carrito (<BubbleAlert />)
			</ButtonCarrito>
		</StyledHeader>
	)
}

export default Header
