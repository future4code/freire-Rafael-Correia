import React from "react"
import PerguntaAberta from "./PerguntaAberta"
import PerguntaFechada from "./PerguntaFechada"
import Styled from "styled-components"

const ContainerEtapa = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TituloEtapa = Styled.h2`
    font-size: 1.5rem;
    margin: 1rem 0;
`

const Botao = Styled.button`
    text-align: center;
    padding: 0.2rem 0.6rem;
    margin: 1rem;
`

class Etapa1 extends React.Component {
    render() {
        return (
            <ContainerEtapa>
                <TituloEtapa>Etapa 1 - Dados Gerais</TituloEtapa>
                <PerguntaAberta 
                    pergunta={"1. Qual o seu nome?"}
                    tipo={"text"}
                    id={"nome"}
                    obrigatoria={true}
                />
                <PerguntaAberta 
                    pergunta={"2. Qual sua idade?"}
                    tipo={"number"}
                    id={"idade"}
                    obrigatoria={true}
                />
                <PerguntaAberta 
                    pergunta={"3. Qual seu e-mail?"}
                    tipo={"email"}
                    id={"email"}
                    obrigatoria={true}
                />
                <PerguntaFechada
                    pergunta={"4. Qual a sua escolaridade?"}
                    id={"escolaridade"}
                    opcao={"Ensino médio incompleto"}
                    opcao2={"Ensino médio completo"}
                    opcao3={"Ensino superior incompleto"}
                    opcao4={"Ensino superior completo"}
                />
                <Botao type="submit" onClick={this.props.aoEnviar}>Próxima etapa</Botao>
            </ContainerEtapa>
        )
    }
}

export default Etapa1 