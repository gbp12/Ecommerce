import styled from "styled-components"
import "animate.css"
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
`

export const Img = styled.img`
	width: 200px;
	height: 150px;
	display: flex;
	align-items: center;
	@media only screen and (max-width: 800px) {
		width: 100px;
		height: 75px;
	}
	@media only screen and (max-width: 400px) {
		width: 60px;
		height: 50px;
	}
`

export const ButtonProduct = styled.button`
	cursor: pointer;
	background-color: #0a3e;
	color: #fff;
	border: none;
	width: 80px;
	border-radius: 5px;
	border: 1px solid #0a3e;
	height: 35px;
	:hover {
		color: #0a3e;
		background-color: #fff;
	}
	@media only screen and (max-width: 400px) {
		width: 60px;
		font-size: 10px;
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
	@media only screen and (max-width: 500px) {
		width: 80px;
		height: 25px;
		margin-right: 0;
	}
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
	@media only screen and (max-width: 800px) {
		font-size: 10px;
	}
	@media only screen and (max-width: 400px) {
		font-size: 8px;
		margin-right: 0px;
		margin-top: -12px;
	}
`

export const DivLista = styled.div`
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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

export const DivFila = styled.div`
	display: flex;
	flex-direction: column;
`

export const H1 = styled.h1`
	width: auto;
	text-align: center;
	margin-top: 60px;
	margin-bottom: -40px;
	background-color: #d1e2ff;
	padding: 1vh;
	@media only screen and (max-width: 400px) {
		font-size: larger;
	}
`

export const Complete = styled.div`
	background-color: aliceblue;
	display: flex;
	justify-content: center;
	cursor: pointer;
	width: 300px;
	padding: 5px 10px 5px 15px;
	border: solid 1px #eee;
	box-shadow: 0 5px 5px rgb(0, 0, 0, 0.1);
	:hover {
		background-color: #fff;
	}
`
