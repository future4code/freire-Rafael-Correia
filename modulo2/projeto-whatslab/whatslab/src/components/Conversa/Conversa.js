import React from "react";
import styled from "styled-components";
import backgroundImg from "../../img/background.jpg"
import sendIcon from "../../img/send_icon.png"
import "./conversa.css"

const ContainerConversa = styled.section`
    width: 70%;
    height: 100vh;
    margin: 0;
    font-size: 1.3rem;

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`

const ContainerMensagem = styled.li`
    background-color: whitesmoke;
    padding: 5px 10px;
    width: 50%;
    border-radius: 10px;
    margin: 10px 0;
    height: auto;
`

const ContainerListaMensagens = styled.ul`
    display: flex;
    flex-direction: column-reverse;
    background: url(${backgroundImg});
    text-decoration: none;
    list-style-type: none;
    width: calc(100% - 2rem);
    height: calc(90% - 2rem);
    margin: 0;
    padding: 1rem;
`

const NomeUsuario = styled.p`
    font-weight: bold;
    margin-top: 0 ;
    margin-bottom: 10px;
`

const MensagemUsuario = styled.span`
display: block;
    padding: 10px 0;
    margin-bottom: 10px;
`

const ContainerInputs = styled.div`
    display: flex;
    justify-content: space-between;
    height: 10%;
    border: 1px solid black;
    width: calc(100% - 2px);
`

const EntradaInput = styled.input`
    font-size: 1.3rem;
    margin: 0.5rem 0;
    padding: 0.3rem 0.8rem;
    margin-left: 10px;
    width: 20%;
    background-color: #222;
    color: white;
    border-radius: 10px;
`

const EntradaInput2 = styled.input`
    font-size: 1.3rem;
    margin: 0.5rem 0;
    padding: 0.3rem 0.8rem;
    margin-left: 10px;
    width: 50%;
    background-color: #222;
    color: white;
    border-radius: 10px;
`

const ImgSend = styled.img`
    width: 3rem;
`

const BotaoEnviar = styled.button`
    border: none;
`

class Conversa extends React.Component {
    state = {
        listaMensagens: [],

        valorInputUser: "",
        valorInputMensagem: ""
    }

    enviarMensagem = () => {
        const novaMensagem = {
            nome: this.state.valorInputUser.trim(),
            mensagem: this.state.valorInputMensagem,
            idUser: ""
        }

        if(novaMensagem.nome.toUpperCase().trim() === "EU") {
            novaMensagem.idUser = "usuario";
            novaMensagem.nome = ""
        } else {
            novaMensagem.idUser = "padrao";
        }

        const novaListaMensagens = [novaMensagem, ...this.state.listaMensagens];
        this.setState({
            listaMensagens: novaListaMensagens
        });

        this.setState({
            valorInputUser: '',
            valorInputMensagem: ''
        });
    }


    onChangeInputUser = (event) => { 
        this.setState({
            valorInputUser: event.target.value
        })
    }

    onChangeInputMensagem = (event) => { 
        this.setState({
            valorInputMensagem: event.target.value
        })
    }

    isEnter = (event) => {
        if(event.key === 'Enter') {
            this.enviarMensagem()
        }
    }

    handleDoubleClick = (e) => {
        if(e.detail === 2) {
            let index 
            if(window.confirm("Deseja realmente excluir esta mensagem?")) {
                
                if(e.target.nodeName === "LI") {
                    this.state.listaMensagens.forEach((mensagem) => {
                        if(e.target.innerHTML.includes(mensagem.nome) && e.target.innerHTML.includes(mensagem.mensagem) ) {
                            index = this.state.listaMensagens.indexOf(mensagem)
                        }
                    })
                }
                else if(e.target.nodeName === "P") {
                    this.state.listaMensagens.forEach((mensagem) => {
                        if(e.target.innerHTML.includes(mensagem.nome)) {
                            index = this.state.listaMensagens.indexOf(mensagem)
                        }
                    })
                }
                else if(e.target.nodeName === "SPAN") {
                    this.state.listaMensagens.forEach((mensagem) => {
                        if(e.target.innerHTML.includes(mensagem.mensagem) ) {
                            index = this.state.listaMensagens.indexOf(mensagem)
                        }
                    })
                }

                const novaLista = this.state.listaMensagens.splice(index, 1)

                console.log(e.target.innerHTML)
                console.log(index)
                this.setState({
                    listaMensagens: this.state.listaMensagens
                })
            }
        }
    }

    render() {
        const componentesListaMensagens = this.state.listaMensagens.map((texto, i) => {

            return (
                <ContainerMensagem key={texto.mensagem + i} id={texto.idUser} onClick={this.handleDoubleClick}>
                    <NomeUsuario>{texto.nome}</NomeUsuario>
                    <MensagemUsuario>{texto.mensagem}</MensagemUsuario>
                </ContainerMensagem>
            )
        })

        return (
            <ContainerConversa
                onKeyPress={this.isEnter}
            >
                <ContainerListaMensagens>
                    {componentesListaMensagens}
                </ContainerListaMensagens>
                <ContainerInputs>
                    <EntradaInput 
                        onChange={this.onChangeInputUser} 
                        placeholder={"Usuário"}
                        value={this.state.valorInputUser}
                    />
                    <EntradaInput2 
                        onChange={this.onChangeInputMensagem} 
                        placeholder={"Mensagem"}
                        value={this.state.valorInputMensagem}
                    />
                    <BotaoEnviar onClick={this.enviarMensagem}>
                        <ImgSend src={sendIcon} />
                    </BotaoEnviar>
                </ContainerInputs>
            </ContainerConversa>
        )
    }
}

export default Conversa;