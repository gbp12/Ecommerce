import { StyledLi, DivLista, ButtonDelete, Complete } from "./Styles"
import { useSelector, useDispatch } from "react-redux"
import { VoidLista } from "./VoidList"

export const ButtonLista = () => {
	const state = useSelector((x) => x)

	return <div>{state.esVisible ? <Lista /> : null}</div>
}

export const Lista = () => {
	const state = useSelector((x) => x)
	const Element = () => {
		const dispatch = useDispatch()
		const state = useSelector((x) => x)
		return (
			<div>
				{state.carro.map((x) => (
					<StyledLi key={Math.random()}>
						{x.cantidad} &nbsp;
						{x.nombre}(s)
						<ButtonDelete
							onClick={() => {
								dispatch({ type: "remove", payload: x })
							}}>
							eliminar
						</ButtonDelete>
					</StyledLi>
				))}
				<Complete
					onClick={() => {
						dispatch({ type: "completed" })
						alert("Tu compra se ha realizado correctamente.")
					}}>
					Completar Compra
				</Complete>
			</div>
		)
	}
	return <DivLista>{state.contadorProductos !== 0 ? <Element /> : <VoidLista />}</DivLista>
}
