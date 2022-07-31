import React from 'react'
import { InputContainer } from './styled'

const InputForm = (props) => {
    return (
        <InputContainer 
            name={props.name}
            onChange={props.onChange}
            placeholder={props.placeHolder}
            type={props.type}
            value={props.value}
            required
        />
    )
}

export default InputForm