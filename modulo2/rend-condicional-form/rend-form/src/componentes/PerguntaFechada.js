import React from 'react'
import Styled from 'styled-components'

const PerguntaFContainer = Styled.section`
    display: flex;
    flex-direction: column;
    height: 5rem;
    justify-content: space-around;
    align-items: center;
`

class PerguntaFechada extends React.Component {
    render() {
        return (
            <PerguntaFContainer>
                <label htmlFor={this.props.id}>{this.props.pergunta}</label>
                <select id={this.props.id}>
                    <option value={this.props.opcao}>{this.props.opcao}</option>
                    <option value={this.props.opcao2}>{this.props.opcao2}</option>
                    <option value={this.props.opcao3}>{this.props.opcao3}</option>
                    <option value={this.props.opcao4}>{this.props.opcao4}</option>
                </select>
            </PerguntaFContainer>
        )
    }
}

export default PerguntaFechada