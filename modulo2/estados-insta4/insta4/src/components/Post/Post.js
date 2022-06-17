import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import naoMarcado from '../../img/bookmark.svg'
import marcado from '../../img/bookmarked.svg'
import compartilhar from '../../img/share.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoShare} from '../SecaoShare/SecaoShare'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 2,
    marcado: false,
    sharing: false
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      curtido: !this.state.curtido,
    })

    if(this.state.curtido === false) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }

  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickMarcado = () => {
    this.setState({
      marcado: !this.state.marcado
    })
  }

  onClickShare = () => {
    this.setState({
      sharing: !this.state.sharing
    })
  }

  afterShare = (event) => {
    this.setState({
      sharing: false
    })
    console.log(`Post compartilhado no ${event.target.name} com a mensagem: ${event.target.alt}`)
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteSharing

    if(this.state.sharing) {
      componenteSharing = <SecaoShare aoEnviar={this.afterShare}/>
    }

    let marcador

    if(this.state.marcado) {
      marcador = marcado
    } else {
      marcador = naoMarcado
    }

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />

          <IconeComContador
            icone={marcador}
            onClickIcone={this.onClickMarcado}
          />

          <IconeComContador
            icone={compartilhar}
            onClickIcone={this.onClickShare}
          />
        </PostFooter>
        {componenteComentario}
        {componenteSharing}
      </PostContainer>
    )
  }
}

export default Post