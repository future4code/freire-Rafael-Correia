import styled from "styled-components"

import {primaryFont, secondaryFont} from '../../constants/fonts'
import { lightTitle, linkColor, linkActiveColor } from "../../constants/colors"

export const MainContainer = styled.main` 
    padding: 0 2.063rem 10% 2.063rem;
    width: 100%;
`

export const TitleSignUpPage = styled.h1` 
    color: ${lightTitle};
    font-family: ${primaryFont};
    font-size: 2.063rem;
    font-weight: 700;
    margin-bottom: 12.125rem;
`

export const InputsContainerSignUp = styled.div` 
    margin-bottom: 4.063rem;
    width: 100%;
`

export const TermsContainer = styled.div` 
    margin-bottom: 1.75rem;
    width: 100%;
    p, label {
        font-family: ${secondaryFont};
        font-size: 0.875rem;
        font-weight: 400;
    }
    p {
        margin-bottom: 1.063rem;
    }
    label {
        margin-left: 0.683rem;
    }
`

export const TermsSpan = styled.span` 
    color: ${linkColor};
    font-weight: 500;
    &:hover, &:focus, &:active {
        cursor: pointer;
        color: ${linkActiveColor};
    }
`

