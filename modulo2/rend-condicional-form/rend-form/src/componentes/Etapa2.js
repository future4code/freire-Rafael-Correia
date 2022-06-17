import React from "react"
import PerguntaAberta from "./PerguntaAberta"
import Styled from "styled-components"

const ContainerEtapa2 = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TituloEtapa2 = Styled.h2`
    font-size: 1.5rem;
    margin: 1rem 0;
`

const Botao = Styled.button`
    text-align: center;
    padding: 0.2rem 0.6rem;
    margin: 1rem;
`

class Etapa2 extends React.Component {
    render() {
        return (
            <ContainerEtapa2>
                <TituloEtapa2>ETAPA 2: Informações educacionais para quem está cursando (ou já terminou) o ensino superior</TituloEtapa2>
                <PerguntaAberta 
                    pergunta={"1. Qual o curso?"}
                    tipo={"text"}
                    id={"cursoNome"}
                    obrigatoria={true}
                />
                <PerguntaAberta 
                    pergunta={"2. Qual a unidade de ensino?"}
                    tipo={"text"}
                    id={"unidadeEnsino"}
                    obrigatoria={true}
                />
                <Botao type="submit" onClick={this.props.aoEnviar}>Próxima etapa</Botao>
            </ContainerEtapa2>
        )
    }
}

export default Etapa2