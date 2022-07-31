import React, {useRef, useState, useCallback} from 'react'

import useTela from '../../hooks/useTela'
import useProtectedPage from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import { CardPost } from '../../components/CardPost/CardPost'
import { CreatePost } from '../../services/posts'
import { SquaredButtonFilled } from '../../components/BotaoGradient/BotaoGradient'
import { MainContainer, InputStyled, TextAreaStyled, LinhaGradient, PostsContainer } from './styled'

const PostsFeedPage = () => {
    useProtectedPage()
    useTela('Posts Feed Page')
    const [pageNumber, setPageNumber] = useState(1)
    const {posts, hasMore, loading} = useInfiniteScroll(pageNumber)
    const [dados, onChange, clear] = useForm({title: '', body: ''})

    const observer = useRef()
    const lastPostElementRef = useCallback(lastElement => {
        if(loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if(lastElement) observer.current.observe(lastElement)
    }, [loading, hasMore])

    const handleCriarPost = () => {
        CreatePost(dados)
        clear()
    }

    let listaDePosts = posts.map((post, index) => {
        if(posts.length === index + 1) {
            return (
                <CardPost 
                    key={post.id}
                    userName={post.username}
                    body={post.body}
                    voteSum={post.voteSum}
                    commentCount={post.commentCount}
                    id={post.id}
                    refProp={lastPostElementRef}
                />
            )
        } else {
            return (
                <CardPost 
                    key={post.id}
                    userName={post.username}
                    body={post.body}
                    voteSum={post.voteSum}
                    commentCount={post.commentCount}
                    id={post.id}
                />
            )
        }
    })

    return(
        <MainContainer>
            <form onSubmit={handleCriarPost}>
                <InputStyled
                    name='title'
                    value={dados.title}
                    onChange={onChange}
                    type={'text'}
                    placeholder={'Título do post'}
                />
                <TextAreaStyled
                    name='body'
                    value={dados.body}
                    onChange={onChange}
                    type={'text'}
                    placeholder={'Escreva seu post...'}
                />
                <SquaredButtonFilled 
                    type={'submit'}
                    text={'Postar'}
                    value={'submit'}
                />
            </form>
            <LinhaGradient />
            <PostsContainer>
                {listaDePosts}
            </PostsContainer>
            <div>{loading && 'Carregando...'}</div>
        </MainContainer>
    )
}

export default PostsFeedPage