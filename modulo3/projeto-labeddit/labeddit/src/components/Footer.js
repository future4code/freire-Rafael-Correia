import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.footer` 
    bottom: 1.94%;
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
`

const FooterBar = styled.div` 
    background-color: #000;
    border-radius: 1rem;
    height: 0.313rem;
    width: 8.375rem;
`

const Footer = () => {
    return (
        <FooterStyled>
            <FooterBar></FooterBar>
        </FooterStyled>
    )
}

export default Footer