import React from 'react';
import styled from 'styled-components';

const BigCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const BigCardImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const BigCardTitle = styled.h4`
    margin-bottom: 15px;
`

const BigCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <BigCard>
            <BigCardImg src={ props.imagem } />
            <BigCardDiv>
                <BigCardTitle>{ props.nome }</BigCardTitle>
                <p>{ props.descricao }</p>
            </BigCardDiv>
        </BigCard>
    )
}

export default CardGrande;