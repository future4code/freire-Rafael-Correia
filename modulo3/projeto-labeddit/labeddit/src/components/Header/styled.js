import styled from "styled-components"
import { darkerBg, linkActiveColor, linkColor } from "../../constants/colors"
import { secondaryFont } from "../../constants/fonts"

export const HeaderContainer = styled.header` 
    min-height: 2.75rem;
    width: 100%;
    margin-bottom: 1.813rem;
` 

export const StatusHeader = styled.div` 
    align-items: center;
    display: flex;
    height: 2.75rem;
    justify-content: space-between;
    margin: 0 1.625rem;
    padding: 0 0.875rem 0 1.5rem;
`

export const StatusHeaderImg = styled.img` 
    height: 0.875rem;
`

export const StatusHeaderTime = styled.span`
    font-weight: bold;
    max-height: 15px;
    max-width: 33px;
`

export const LogoHeaderContainer = styled.div`
    height: 3.125rem;
    width: 100%;
    background-color: ${darkerBg};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
`

export const LogoImg = styled.img` 
    width: 1.75rem;
    height: 1.75rem;
`

export const BotaoTextHeader = styled.span` 
    font-size: 1.125rem;
    font-weight: 600;
    font-family: ${secondaryFont};
    color: ${linkColor};
    &:hover, &:focus {
        cursor: pointer;
        color: ${linkActiveColor};
    }
`

export const LogoImgX = styled.img ` 
    width: 1.6rem;
    height: 1.5rem;
    &:hover, &:focus, &:active {
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 100%;
        background-color: gray;
        transform: scale(2);
    }
`

