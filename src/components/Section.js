import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { DivProduct, ButtonProduct, Img, StyledSection } from "./Styles"

export const Section = () => {
	const dispatch = useDispatch()
	const state = useSelector((x) => x)
	return (
		<StyledSection>
			{state.productos.map((x) => (
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
	)
}
