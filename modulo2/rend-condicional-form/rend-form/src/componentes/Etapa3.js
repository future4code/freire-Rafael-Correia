import React from "react"
import PerguntaAberta from "./PerguntaAberta"
import PerguntaFechada from "./PerguntaFechada"
import Styled from "styled-components"

const ContainerEtapa3 = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TituloEtapa3 = Styled.h2`
    font-size: 1.5rem;
    margin: 1rem 0;
`

const Botao = Styled.button`
    text-align: center;
    padding: 0.2rem 0.6rem;
    margin: 1rem;
`

class Etapa3 extends React.Component {
    render() {
        return (
            <ContainerEtapa3>
                <TituloEtapa3>ETAPA 3: Informações sobre quem não se formou no ensino superior nem está cursando</TituloEtapa3>
                <PerguntaAberta 
                    pergunta={"1. Por que você não terminou um curso de graduação?"}
                    tipo={"text"}
                    id={"duvida"}
                    obrigatoria={false}
                />
                <PerguntaFechada
                    pergunta={"4. Você fez algum curso complementar?"}
                    id={"cursoComplementar"}
                    opcao={"Curso técnico"}
                    opcao2={"Cursos de inglês"}
                    opcao3={"Não fiz curso complementar"}
                />
                <Botao type="submit" onClick={this.props.aoEnviar}>Próxima etapa</Botao>
            </ContainerEtapa3>
        )
    }
}

export default Etapa3