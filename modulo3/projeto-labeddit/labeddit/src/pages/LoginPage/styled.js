import styled from "styled-components"
import { primaryFont } from "../../constants/fonts"

export const MainContainer = styled.main` 
    padding: 0 2.063rem 10% 2.063rem;
    width: 100%;
`

export const LogoContainer = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5.563rem 0;
    width: 100%;
`

export const LogoImg = styled.img` 
    height: 8.875rem;
    width: 9.5rem;
`

export const LogoMensagem = styled.p` 
    font-family: ${primaryFont};
    font-size: 16px;
    font-weight: 300;
    text-align: center;
`

export const InputsContainer = styled.div` 
    margin: 1.125rem 0 3.5rem 0;
    width: 100%;
`

export const LinhaGradient = styled.hr` 
    background: linear-gradient(to right, #FF6489, #F9B24E);
    margin: 1.125rem;
    height: 1px;
`