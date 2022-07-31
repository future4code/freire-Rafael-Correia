import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import useForm from '../../hooks/useForm'
import InputForm from '../../components/InputForm/InputForm'
import { InputsContainerSignUp, TermsContainer, TermsSpan } from './styled'
import { RoundButtonFilled } from '../../components/BotaoGradient/BotaoGradient'
import { BASE_URL } from '../../constants/urls'
import { goToPostsFeedPage } from '../../router/coordinator'

const SignUpForm = () => {
    const navigate = useNavigate()
    const [dados, onChange, clear] = useForm({ username: '', email: '', password: '' })

    const SignUp = () => {
        toast.loading('Carregando...')
        axios.post(`${BASE_URL}/users/signup`, dados)
        .then(resp => {
            toast.dismiss()
            toast.success('Cadastro realizado com sucesso!')
            localStorage.setItem('token', resp.data.token)
            goToPostsFeedPage(navigate)
        })
        .catch(err => {
            toast.dismiss()
            toast.error(`Error: ${err.request.responseText}`)
        })
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()
        SignUp()
    }


    return (
        <form onSubmit={handleSubmitForm}>
            <InputsContainerSignUp>
                <InputForm
                    name={'username'}
                    onChange={onChange}
                    placeHolder={'Nome de usuário'}
                    type={'text'}
                    value={dados.usename}
                />
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
            </InputsContainerSignUp>
            <TermsContainer>
                <p>Ao continuar, você concorda com o nosso <TermsSpan>Contrato de usuário</TermsSpan> e nossa <TermsSpan>Política de Privacidade</TermsSpan></p>
                <input type="checkbox" id="concordarEmails" name="concordarEmails" value="concordarEmails" />
                <label htmlFor="concordarEmails">Eu concordo em receber emails sobre coisas legais no Labeddit</label>
            </TermsContainer>
            <RoundButtonFilled
                text={'Cadastrar'}
                type={'submit'}
                value={'Submit'}
            />
        </form>
    )
}

export default SignUpForm