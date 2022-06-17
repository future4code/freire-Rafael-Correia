import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import joaoFoto from './img/joao123.webp';
import joaoPost from './img/joaopost.jpg';
import gigaFoto from './img/gigachad.jpg';
import gigaPost from './img/gigapost.jpg';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const FormularioPost = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  margin-bottom: 10px;
  background-color: aqua;
  padding: 10px 5px;
  border-radius: 10px;
  border: 1px solid black;
`

const EntradaUsuario = styled.input`
  width: 90%;
  padding: 5px 10px;
  border-radius: 10px;
  margin-bottom: 5px;
`

const EtiquetaEntrada = styled.label`
  font-weight: bold;
  padding-left: 6px;
`

const BotaoPostar = styled.button`
  width: 50%;
  padding: 10px 10px;
  font-weight: bold;
  align-self: center;
  border-radius: 10px;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nome: 'paulinha',
        foto: 'https://picsum.photos/50/50',
        post: 'https://picsum.photos/200/150'
      },
      {
        nome: 'joãozinho123',
        foto: joaoFoto,
        post: joaoPost
      },
      {
        nome: 'Gigachad',
        foto: gigaFoto,
        post: gigaPost
      }
    ],

    valorInputNome: "",
    valorInputFoto: "",
    valorInputPost: ""
  }

  criarPostagem = () => {
    const novoPost = {
      nome: this.state.valorInputNome,
      foto: this.state.valorInputFoto,
      post: this.state.valorInputPost
    }

    const postsUpdated = [...this.state.posts, novoPost]
    this.setState({posts: postsUpdated})

    this.setState({
      valorInputNome: "",
      valorInputFoto: "",
      valorInputPost: ""
    });
  }

  onChangeNome = (event) => {
    this.setState({
      valorInputNome: event.target.value
    })
  }

  onChangeFoto = (event) => {
    this.setState({
      valorInputFoto: event.target.value
    })
  }

  onChangePost = (event) => {
    this.setState({
      valorInputPost: event.target.value
    })
  }

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return(
        <Post 
          nomeUsuario={post.nome}
          fotoUsuario={post.foto}
          fotoPost={post.post}
        />
      )
    })

    return (
      <MainContainer>
        <FormularioPost>
          <EtiquetaEntrada for="usuario">Usuário:</EtiquetaEntrada>
          <EntradaUsuario
            value={this.state.valorInputNome}
            onChange={this.onChangeNome}
            placeholder={'Nome do usuário'}
            id={"usuario"}
          />
          <EtiquetaEntrada for="fotoUsuario">Foto:</EtiquetaEntrada>
          <EntradaUsuario
            value={this.state.valorInputFoto}
            onChange={this.onChangeFoto}
            placeholder={'link da foto do usuário'}
            id={"fotoUsuario"}
          />
          <EtiquetaEntrada for="postUsuario">Post:</EtiquetaEntrada>
          <EntradaUsuario
            value={this.state.valorInputPost}
            onChange={this.onChangePost}
            placeholder={'link do post'}
            id={"postUsuario"}
          />
          <BotaoPostar onClick={this.criarPostagem}>Enviar Postagem</BotaoPostar>
        </FormularioPost>
        {listaDePosts}
      </MainContainer>
    );
  }
}

export default App;
