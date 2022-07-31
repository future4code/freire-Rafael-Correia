import { toast } from 'react-toastify'
import axios from 'axios'

import { BASE_URL } from '../constants/urls'
import { goToLoginPage, goToPostsFeedPage } from '../router/coordinator'

export const Login = (body, navigate) => {
    toast.loading('Carregando...')
    axios.post(`${BASE_URL}/users/login`, body)
    .then(resp => {
        toast.dismiss()
        toast.success('Login efetuado, Boas vindas!')
        localStorage.setItem('token', resp.data.token)
        goToPostsFeedPage(navigate)
    })
    .catch(err => {
        toast.dismiss()
        console.log(err)
        let errorMessagem = ''
        if(err.response?.data?.errors?.length > 0){
            errorMessagem += Object.getOwnPropertyNames(err.response.data.errors[0])
            if(err.response.data.errors.length > 1) {
                errorMessagem += ', ' + Object.getOwnPropertyNames(err.response.data.errors[1])
            }
        }
        toast.error(`Error: ${err.response.data.message}: ${errorMessagem}`)
    })
}

export const Logout = (navigate) => {
    localStorage.removeItem('token')
    goToLoginPage(navigate)
}