import React, { useState } from 'react'
import GlobalStateContext from '../context/context'

const GlobalState = (props) => {
    const [telaAtual, setTelaAtual] = useState('Login Page')

    return(
        <GlobalStateContext.Provider value={{telaAtual, setTelaAtual}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState