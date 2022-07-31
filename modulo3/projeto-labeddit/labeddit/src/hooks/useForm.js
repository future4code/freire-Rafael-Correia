import { useState } from 'react'

const useForm = (initialState) => {
    const [dadosUsuario, setDadosUsuario] = useState(initialState)

    const handleInputChange = (event) => {
        const {value, name} = event.target
        setDadosUsuario({...dadosUsuario, [name]: value})
    }

    const clear = () => {
        setDadosUsuario(initialState)
    }

    return [dadosUsuario, handleInputChange, clear]
}

export default useForm