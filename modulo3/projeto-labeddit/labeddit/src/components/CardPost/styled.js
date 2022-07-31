import styled from "styled-components"

import { lightText } from "../../constants/colors"
import { primaryFont } from "../../constants/fonts"

export const CardPostContainer = styled.div`
    background-color: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.625rem;
    min-height: 10.438rem;
    padding: 0.563rem 0.625rem;
    width: 100%;
    &:hover, &:focus, &:active {
        border-color: black;
    }
`

export const CardPostDetailsContainer = styled.div` 
    background-color: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.625rem;
    min-height: 10.438rem;
    padding: 0.563rem 0.625rem;
    width: 100%;
`

export const NomeUsuario = styled.span` 
    color: ${lightText};
    font-family: ${primaryFont};
    font-size: 0.75rem;
    font-weight: 400;
    margin-bottom: 1.125rem;
    &:hover, &:focus, &:active {
        cursor: pointer;
    }
`

export const PostMessage = styled.p`
    font-family: ${primaryFont};
    font-size: 1.125rem;
    font-weight: 400;
    margin-bottom: 1.125rem;
    &:hover, &:focus, &:active {
        cursor: pointer;
    }
`

export const Postbotoes = styled.div`
    min-height: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 10.938rem;
`

export const PostBotoesDiv = styled.div` 
    align-items: center;
    border: 1px solid #ECECEC;
    border-radius: 1.75rem;
    display: flex;
    justify-content: space-between;
    margin-right: 0.688rem;
    padding: 0.313rem;
    img {
        width: 1.188rem;
        height: 1.188rem;
    }
    span {
        color: #6F6F6F;
        margin: 0 0.688rem;
        font-family: ${primaryFont};
        font-size: 0.598rem;
        font-weight: 700;
    }
    &:hover, &:focus {
        cursor: pointer;
    }
`