import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

const ListaComments = styled.div`
	display: block;
	padding-left: 10px;
	padding-top: 5px;
`

const UserName = styled.span`
	font-style: italic;
`

export class SecaoComentario extends Component {
	state = {
		valorComentario: "",
		comentarios: [
			{
				user: "emy",
				comment: "É sobre isso!"
			},
			{
				user: "maikão",
				comment: "Voa mlk!"
			}
		]
	}

	onChangeComentario = (event) => {
		this.setState({
			valorComentario: event.target.value
		})
		console.log(event.target.value);
	}

	criarComentario = () => {

		this.props.aoEnviar()

		const novoComentario = {
			user: "você",
			comment: this.state.valorComentario
		}

		const novaArrayComentarios = [...this.state.comentarios, novoComentario]
		this.setState({
			comentarios: novaArrayComentarios
		})

		this.setState({
			valorComentario: ""
		})
	}
	
	render() {

		const listaDeComentarios = this.state.comentarios.map((comentario) => {
			return (
				<p><UserName>{comentario.user} : </UserName>{comentario.comment}</p>
			)
		})

		return (
			<div>
				<CommentContainer>
					<InputComentario
						placeholder={'Comentário'}
						value={this.state.valorComentario}
						onChange={this.onChangeComentario}
					/>
					<button onClick={this.criarComentario}>Enviar</button>
				</CommentContainer>
				<ListaComments>
					{listaDeComentarios}
				</ListaComments>
			</div>
		)
	}
}
