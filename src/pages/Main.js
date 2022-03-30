import React from "react"
import { Sections } from "../components/Section"
import { ButtonLista } from "../components/Lista"
/* Componente principal de la aplicacion que alverga las secciones y el div 
que muestra los productos*/
const Main = () => {
	return (
		<div>
			<ButtonLista />
			<Sections />
		</div>
	)
}

export default Main
