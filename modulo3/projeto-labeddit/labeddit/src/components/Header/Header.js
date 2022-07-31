import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import GlobalStateContext from "../../context/context"
import statusBar from '../../assets/status_bar.png'
import logoMenor from '../../assets/logo_menor.png'
import fecharBotaoHeader from '../../assets/fechar_botao_header.png'
import { goBackPage, goToLoginPage } from '../../router/coordinator'
import { HeaderContainer, StatusHeader, StatusHeaderImg, StatusHeaderTime, LogoHeaderContainer, LogoImg, BotaoTextHeader, LogoImgX } from './styled'
import { Logout } from '../../services/users'

const Header = () => {
    const navigate = useNavigate()
    const [hora, setHora] = useState('')
    const {telaAtual} = useContext(GlobalStateContext)

    //define o que aparece no header dependendo da tela atual
    let logoElementosJsx
    if(telaAtual) {
        switch(telaAtual) {
            case 'Login Page': 
                logoElementosJsx = (
                    <div style={{display: 'none'}}></div>
                )
                break;
            case 'Sign Up Page':
                logoElementosJsx = (
                    <LogoHeaderContainer>
                        <div></div>
                        <LogoImg src={logoMenor} alt='logo labeddit' />
                        <BotaoTextHeader onClick={() => goToLoginPage(navigate)}>Login</BotaoTextHeader>
                    </LogoHeaderContainer>
                )
                break;
            case 'Posts Feed Page':
                logoElementosJsx = (
                    <LogoHeaderContainer>
                        <div></div>
                        <LogoImg src={logoMenor} alt='logo labeddit' />
                        <BotaoTextHeader onClick={() => Logout(navigate)}>Logout</BotaoTextHeader>
                    </LogoHeaderContainer>
                )
                break;
            case 'Post Details Page':
                logoElementosJsx = (
                    <LogoHeaderContainer>
                        <LogoImgX src={fecharBotaoHeader} alt='botão X para fechar' onClick={() => goBackPage(navigate)} />
                        <LogoImg src={logoMenor} alt='logo labeddit' />
                        <BotaoTextHeader onClick={() => Logout(navigate)}>Logout</BotaoTextHeader>
                    </LogoHeaderContainer>
                )
                break;
            default :
                logoElementosJsx = (
                    <LogoHeaderContainer>
                        <div></div>
                        <LogoImg src={logoMenor} alt='logo labeddit' />
                        <BotaoTextHeader>Voltar</BotaoTextHeader>
                    </LogoHeaderContainer>
                )
                break;
        }
    }

    const getTime = () => {
        const today = new Date()
        const hour = today.getHours()
        const minutes = today.getMinutes()

        setHora(`${hour}:${minutes}`)
    }

    setInterval(getTime, 30000)

    useEffect(() => {
        getTime()
    }, [hora])

    return(
        <HeaderContainer>
            <StatusHeader>
                <StatusHeaderTime>{hora}</StatusHeaderTime>
                <StatusHeaderImg src={statusBar} alt='Barra de status' />
            </StatusHeader>
            {logoElementosJsx}
        </HeaderContainer>
    )
}

export default Header