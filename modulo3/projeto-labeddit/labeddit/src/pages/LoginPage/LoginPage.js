import React from 'react'
import { useNavigate } from 'react-router-dom'

import useTela from '../../hooks/useTela'
import useForm from '../../hooks/useForm'
import logoLabEddit from '../../assets/logo.png'
import InputForm from '../../components/InputForm/InputForm'
import { Login } from '../../services/users'
import { goToSignUpPage } from '../../router/coordinator'
import { RoundButtonFilled, RoundButtonNoFill } from '../../components/BotaoGradient/BotaoGradient'
import { MainContainer, LogoContainer, LogoImg, LogoMensagem, InputsContainer, LinhaGradient } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = () => {
    useUnprotectedPage()
    useTela('Login Page')
    const navigate = useNavigate()
    const [dados, onChange, clear] = useForm({email: '', password: ''})

    const handleLogin = async () => {
        Login(dados, navigate)
    }

    return (
        <MainContainer>
            <LogoContainer>
                <LogoImg src={logoLabEddit} alt='logo' />
                <LogoMensagem>O projeto de rede social da Labenu</LogoMensagem>
            </LogoContainer>
            <InputsContainer>
                <InputForm
                    name={'email'}
                    onChange={onChange}
                    placeHolder={'E-mail'}
                    type={'email'}
                    value={dados.email}
                />
                <InputForm
                    name={'password'}
                    onChange={onChange}
                    placeHolder={'Senha'}
                    type={'password'}
                    value={dados.password}
                />
            </InputsContainer>
            <div>
                <RoundButtonFilled
                    onClick={handleLogin}
                    text={'Continuar'}
                    type={'button'}
                />
                <LinhaGradient />
                <RoundButtonNoFill
                    onClick={() => goToSignUpPage(navigate)}
                    text={'Criar uma conta!'}
                    type={'button'}
                />
            </div>
        </MainContainer>
    )
}

export default LoginPage