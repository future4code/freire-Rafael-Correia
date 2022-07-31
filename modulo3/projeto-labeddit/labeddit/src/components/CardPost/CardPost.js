import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CardPostContainer, NomeUsuario, PostMessage, Postbotoes, PostBotoesDiv } from './styled'
import IconCurtirLight from '../../assets/icon_curtida_light.png'
import IconDescurtirLight from '../../assets/icon_descurtir_light.png'
import IconCurtirImg from '../../assets/icon_curtida.png'
import IconDescurtirImg from '../../assets/icon_descurtir.png'
import IconComment from '../../assets/icon_comment.png'
import { goToPostDetailsPage } from '../../router/coordinator'
import { ChangeVote } from '../../services/posts'

export const CardPost = (props) => {
    const navigate = useNavigate()
    const [iconCurtida, setIconCurtida] = useState(false)
    const [iconDescurtir, setIconDescurtir] = useState(false)

    const handleCurtida = (e, acao) => {
        if(acao === 'curtida') {
            if(iconCurtida) {
                ChangeVote(e.target.id, -1, 'posts')
            }else {
                ChangeVote(e.target.id, 1, 'posts')
            }
            if(iconDescurtir) {
                setIconDescurtir(false)
                setIconCurtida(!iconCurtida)
            }else {
                setIconCurtida(!iconCurtida)
            }
        } else { 
            if(iconDescurtir) {
                ChangeVote(e.target.id, 1, 'posts')
            } else {
                ChangeVote(e.target.id, -1, 'posts')
            }
            if(iconCurtida) {
                setIconCurtida(false)
                setIconDescurtir(!iconDescurtir)
            } else {
                setIconDescurtir(!iconDescurtir)
            }
        }
    }

    return (
        <CardPostContainer 
        key={props.id} 
        id={props.id} 
        ref={props.refProp}
        >
            <NomeUsuario onClick={() => goToPostDetailsPage(navigate, props.id)}>Enviado por: {props.userName}</NomeUsuario>
            <PostMessage onClick={() => goToPostDetailsPage(navigate, props.id)}>{props.body}</PostMessage>
            <Postbotoes>
                <PostBotoesDiv>
                    {iconCurtida ? <img src={IconCurtirImg} alt='Ícone curtir' onClick={(e) => handleCurtida(e, 'curtida')} id={props.id}/> : <img src={IconCurtirLight} alt='Ícone curtir' onClick={(e) => handleCurtida(e, 'curtida')} id={props.id}/>}

                    <span>{props.voteSum}</span>

                    {iconDescurtir ? <img src={IconDescurtirImg} alt='Ícone descurtir' onClick={(e) => handleCurtida(e, 'descurtida')} id={props.id}/> : <img src={IconDescurtirLight} alt='Ícone descurtir' onClick={(e) => handleCurtida(e, 'descurtida')} id={props.id}/>}
                </PostBotoesDiv>
                <PostBotoesDiv onClick={() => goToPostDetailsPage(navigate, props.id)}>
                    <img src={IconComment} alt='Ícone de comentários' />
                    <span>{props.commentCount}</span>
                </PostBotoesDiv>
            </Postbotoes>
        </CardPostContainer>
    )
}

export const CardComment = (props) => {
    const navigate = useNavigate()
    const [iconCurtida, setIconCurtida] = useState(false)
    const [iconDescurtir, setIconDescurtir] = useState(false)

    const handleCurtida = (e, acao) => {
        if(acao === 'curtida') {
            if(iconCurtida) {
                ChangeVote(e.target.id, -1, 'comments')
            }else {
                ChangeVote(e.target.id, 1, 'comments')
            }
            if(iconDescurtir) {
                setIconDescurtir(false)
                setIconCurtida(!iconCurtida)
            }else {
                setIconCurtida(!iconCurtida)
            }
        } else { 
            if(iconDescurtir) {
                ChangeVote(e.target.id, 1, 'comments')
            } else {
                ChangeVote(e.target.id, -1, 'comments')
            }
            if(iconCurtida) {
                setIconCurtida(false)
                setIconDescurtir(!iconDescurtir)
            } else {
                setIconDescurtir(!iconDescurtir)
            }
        }
    }


    return (
        <CardPostContainer 
        key={props.id} 
        id={props.id} 
        ref={props.refProp}
        >
            <NomeUsuario onClick={() => goToPostDetailsPage(navigate, props.id)}>Enviado por: {props.userName}</NomeUsuario>
            <PostMessage onClick={() => goToPostDetailsPage(navigate, props.id)}>{props.body}</PostMessage>
            <Postbotoes>
                <PostBotoesDiv>
                    {iconCurtida ? <img src={IconCurtirImg} alt='Ícone curtir' onClick={(e) => handleCurtida(e, 'curtida')} id={props.id}/> : <img src={IconCurtirLight} alt='Ícone curtir' onClick={(e) => handleCurtida(e, 'curtida')} id={props.id}/>}

                    <span>{props.voteSum}</span>

                    {iconDescurtir ? <img src={IconDescurtirImg} alt='Ícone descurtir' onClick={(e) => handleCurtida(e, 'descurtida')} id={props.id}/> : <img src={IconDescurtirLight} alt='Ícone descurtir' onClick={(e) => handleCurtida(e, 'descurtida')} id={props.id}/>}
                </PostBotoesDiv>
            </Postbotoes>
        </CardPostContainer>
    )
}