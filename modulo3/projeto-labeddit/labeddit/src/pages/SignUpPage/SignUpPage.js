import React from 'react'

import useTela from '../../hooks/useTela'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import SignUpForm from './SignUpForm'
import { MainContainer, TitleSignUpPage } from './styled'

const SignUpPage = () => {
    useUnprotectedPage()
    useTela('Sign Up Page')

    return(
        <MainContainer>
            <TitleSignUpPage>Olá, boas vindas ao LabEddit ;)</TitleSignUpPage>
            <SignUpForm />
        </MainContainer>
    )
}

export default SignUpPage