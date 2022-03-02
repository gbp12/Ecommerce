import React from "react"
import { Section } from "../components/Section"
import { ButtonLista } from "../components/Lista"
/* Componente principal de la aplicacion que alverga las secciones y el div 
que muestra los productos*/
const Main = () => {
	return (
		<div>
			<ButtonLista />
			<Section />
		</div>
	)
}

export default Main
