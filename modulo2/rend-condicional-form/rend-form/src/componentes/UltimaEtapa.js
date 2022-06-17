import React from 'react'
import styled from 'styled-components'

const TituloH1 = styled.h1`
    margin: 2rem;
    font-size: 2rem;
`
const Descricao = styled.p`
    font-size: 1.5rem;
`

class UltimaEtapa extends React.Component {
    render() {
        return (
            <div>
                <TituloH1>Formulário preenchido com sucesso!</TituloH1>
                <Descricao>Obrigado por demonstrar interesse. Nossa equipe analisará os dados e entrará em contato assim que possível.</Descricao>
            </div>
        )
    }
}

export default UltimaEtapa