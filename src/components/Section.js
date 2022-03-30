import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { H1, DivProduct, ButtonProduct, Img, StyledSection, DivFila } from "./Styles"

export const Sections = () => {
	const dispatch = useDispatch()
	const state = useSelector((x) => x)
	return (
		<DivFila>
			<H1>Verduras</H1>
			<StyledSection>
				{state.verduras.map((x) => (
					<DivProduct key={Math.random()}>
						<Img src={x.img} />

						<ButtonProduct
							onClick={() => {
								dispatch({ type: "add", payload: x })
							}}>
							comprar {x.nombre}
						</ButtonProduct>
					</DivProduct>
				))}
			</StyledSection>
			<H1>Frutas</H1>
			<StyledSection>
				{state.frutas.map((x) => (
					<DivProduct key={Math.random()}>
						<Img src={x.img} />

						<ButtonProduct
							onClick={() => {
								dispatch({ type: "add", payload: x })
							}}>
							comprar {x.nombre}
						</ButtonProduct>
					</DivProduct>
				))}
			</StyledSection>
		</DivFila>
	)
}
