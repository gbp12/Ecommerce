import styled from "styled-components"
export const StyledHeader = styled.div`
	background-color: green;
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 10px;
	padding-left: 10px;
`

export const StyledProducts = styled.div`
	display: flex;
	justify-content: space-around;
	height: 30vh;
	align-items: center;
`

export const Img = styled.img`
	width: 200px;
	height: 150px;
	margin-top: 10%;
	display: flex;
	align-items: center;
`

export const ButtonProduct = styled.button`
	background-color: #0a3e;
	color: #fff;
	padding: 10px, 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`

export const ButtonCarrito = styled.button`
	background-color: #e9725a;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	height: 30px;
	:hover {
		color: #e9725a;
		background-color: #fff;
	}
`

export const StyledMain = styled.div`
	display: flex;
	flex-direction: column;
`

export const StyledLista = styled.div`
	text-align: center;
`
