import styled from "styled-components"

import { primaryFont } from "../../constants/fonts"

export const MainContainer = styled.main`
    padding: 0 2.063rem 10% 2.063rem;
    width: 100%;
`

export const InputStyled = styled.input` 
    background: #EDEDED;
    border: none;
    border-radius: 0.75rem;
    font-family: ${primaryFont};
    font-size: 1.125rem;
    font-weight: 400;
    margin-bottom: 0.75rem;
    min-height: 3.313rem;
    padding: 0.938rem 1.188rem;
    width: 100%;
`

export const TextAreaStyled = styled.textarea` 
    background: #EDEDED;
    border: none;
    border-radius: 0.75rem;
    font-family: ${primaryFont};
    font-size: 1.125rem;
    font-weight: 400;
    margin-bottom: 0.75rem;
    min-height: 8.188rem;
    padding: 0.938rem 1.188rem;
    resize: none;
    width: 100%;
`

export const LinhaGradient = styled.hr` 
    margin: 1.5rem 0;
    width: 100%;
    height: 0.125rem;
    background: linear-gradient(to right, #FF6489, #F9B24E);
`

export const PostsContainer = styled.section` 
    display: flex;
    width: 100%;
    flex-direction: column;
`
