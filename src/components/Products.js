import React from "react"
import { StyledProducts } from "./Styles"
import { ButtonEsparrago, ButtonPapa, ButtonTomate } from "../components/Buttons"

const Products = () => {
	return (
		<StyledProducts>
			<ButtonPapa />
			<ButtonTomate />
			<ButtonEsparrago />
		</StyledProducts>
	)
}

export default Products
