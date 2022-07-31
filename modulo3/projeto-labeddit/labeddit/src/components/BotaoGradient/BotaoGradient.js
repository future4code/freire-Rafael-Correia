import React from 'react'
import { RoundButtonFilledS, RoundButtonNoFillS, SquaredButtonFilledS } from './styled'

export const RoundButtonFilled = (props) => {
    return(
        <RoundButtonFilledS 
            onClick={props.onClick} 
            type={props.type}
            value={props.value}
        >
            {props.text}
        </RoundButtonFilledS>
    )
}

export const RoundButtonNoFill = (props) => {
    return(
        <RoundButtonNoFillS 
            onClick={props.onClick} 
            type={props.type}
            value={props.value}
        >
            {props.text}
        </RoundButtonNoFillS>
    )
}

export const SquaredButtonFilled = (props) => {
    return(
        <SquaredButtonFilledS 
            onClick={props.onClick} 
            type={props.type}
            value={props.value}
        >
            {props.text}
        </SquaredButtonFilledS>
    )
}