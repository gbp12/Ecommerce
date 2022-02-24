import styled from "styled-components"
export const StyledHeader = styled.div`
	background-color: green;
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 63px;
	width: 100%;
	position: fixed;
`

export const StyledSection = styled.div`
	display: flex;
	justify-content: space-around;
	height: 30vh;
	padding-top: 5%;

	@media only screen and (max-width: 600px) {
		padding-top: 20%;
	}
`

export const Img = styled.img`
	width: 200px;
	height: 150px;
	margin-top: 10%;
	display: flex;
	align-items: center;
`

export const ButtonProduct = styled.button`
	cursor: pointer;
	background-color: #0a3e;
	color: #fff;
	border: none;
	width: 80px;
	border-radius: 5px;
	border: 1px solid #0a3e;
	:hover {
		color: #0a3e;
		background-color: #fff;
	}
`

export const ButtonDelete = styled.button`
	cursor: pointer;
	border: none;
	border-radius: 5px;
	border: 1px solid #0a3e;
	background-color: #fff;
	:hover {
		color: #fff;
		background-color: #0a3e;
	}
`

export const ButtonCarrito = styled.button`
	background-color: #e9725a;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	height: 35px;
	width: 110px;
	margin-right: 10px;
	:hover {
		color: #e9725a;
		background-color: #fff;
	}
`

export const StyledMain = styled.div`
	display: flex;
	flex-direction: row;
`

export const StyledLi = styled.div`
	background-color: aliceblue;
	display: flex;
	justify-content: space-between;
	width: 300px;
	padding: 5px 10px 5px 15px;
	border: solid 1px #eee;
	box-shadow: 0 5px 5px rgb(0, 0, 0, 0.1);
	:hover {
		background-color: #fff;
	}
`

export const H3 = styled.h3`
	margin-right: 20px;
`

export const DivLista = styled.div`
	position: fixed;
	right: 0px;
	top: 63px;
`

export const DivProduct = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`
