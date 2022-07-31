import axios from "axios"
import { toast } from 'react-toastify'

import { BASE_URL } from "../constants/urls"

export const CreatePost = (body) => {
    toast.loading('Criando Postangem...')
    const token = localStorage.getItem('token')
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: token
        }
    })
    .then(res => {
        toast.dismiss()
        toast.success('Post criado!')
    })
    .catch(err => {
        toast.dismiss()
        toast.error('Falha na criação do post.')
    })
}

export const CreateComment = (id, body) => {
    toast.loading('Carregando...')
    const token = localStorage.getItem('token')
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: token
        }
    })
    .then(res => {
        toast.dismiss()
        toast.success('Comentário criado!')
    })
    .catch(err => {
        toast.dismiss()
        toast.error(`Error: ${err}`)
    })
}

export const ChangeVote = (id, direction, type) => {
    const token = localStorage.getItem('token')
    const body = {
        direction: direction
    }

    axios.put(`${BASE_URL}/${type}/${id}/votes`, body, {
        headers: {
            Authorization: token
        }
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}   