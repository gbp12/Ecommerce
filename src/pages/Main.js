import React from "react"
import { Header } from "../components/Header"
import Products from "../components/Products"
import { ButtonLista } from "../components/Buttons"
import { StyledMain } from "../components/Styles"
const Main = () => {
	return (
		<div>
			<Header />
			<StyledMain>
				<Products />
				<ButtonLista />
			</StyledMain>
		</div>
	)
}

export default Main
