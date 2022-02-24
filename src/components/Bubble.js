import { useSelector } from "react-redux"

export const BubbleAlert = () => {
	const state = useSelector((x) => x)
	return <span>{state.contadorProductos > 9 ? "9+" : state.contadorProductos}</span>
}
