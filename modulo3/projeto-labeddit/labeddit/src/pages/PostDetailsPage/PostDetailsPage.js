import React, {useRef, useState, useCallback} from 'react'
import { useParams } from 'react-router-dom'

import useTela from '../../hooks/useTela'
import useProtectedPage from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm'
import useCommentsScroll from '../../hooks/useCommentsScroll'
import { CardComment } from '../../components/CardPost/CardPost'
import { CreateComment } from '../../services/posts'
import { SquaredButtonFilled } from '../../components/BotaoGradient/BotaoGradient'
import { MainContainer, TextAreaStyled, LinhaGradient, PostsContainer } from './styled'

const PostDetailsPage = () => {
    useProtectedPage()
    useTela('Post Details Page')
    const { id } = useParams()

    const [pageNumber, setPageNumber] = useState(1)
    const {comments, hasMore, loading} = useCommentsScroll(pageNumber, id)
    const [dados, onChange, clear] = useForm({ body: ''})

    const observer = useRef()
    const lastCommentElementRef = useCallback(lastElement => {
        if(loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if(lastElement) observer.current.observe(lastElement)
    }, [loading, hasMore])

    const handleCriarComment = () => {
        CreateComment(id, dados)
        clear()
    }

    let listaDeComentarios = comments.map((comentario, index) => {
        if(comments.length === index + 1) {
            return (
                <CardComment 
                    key={comentario.id}
                    userName={comentario.username}
                    body={comentario.body}
                    voteSum={comentario.voteSum}
                    id={comentario.id}
                    refProp={lastCommentElementRef}
                />
            )
        } else {
            return (
                <CardComment 
                    key={comentario.id}
                    userName={comentario.username}
                    body={comentario.body}
                    voteSum={comentario.voteSum}
                    id={comentario.id}
                />
            )
        }
    })

    return(
        <MainContainer>
            <form onSubmit={handleCriarComment}>
                <TextAreaStyled
                    name='body'
                    value={dados.body}
                    onChange={onChange}
                    type={'text'}
                    placeholder={'Adicionar comentário...'}
                />
                <SquaredButtonFilled 
                    type={'submit'}
                    text={'Responder'}
                    value={'submit'}
                />
            </form>
            <LinhaGradient />
            <PostsContainer>
                {listaDeComentarios}
            </PostsContainer>
            <div>{loading && 'Carregando...'}</div>
        </MainContainer>
    )
}

export default PostDetailsPage