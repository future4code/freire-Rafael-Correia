import { PostDatabase } from "../database/PostDatabase"
import { AuthorizationError } from "../errors/AuthorizationError"
import { UnprocessableError } from "../errors/UnprocessableError"
import { ICreatePostInputDTO, IGetPostsOutputDTO, IPostDB, Post } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createPost = async (input: ICreatePostInputDTO) => {
        const { token, content } = input

        const isTokenValid = this.authenticator.getTokenPayload(token)

        if(!isTokenValid) {
            throw new AuthorizationError()
        }

        if(content.length < 1) {
            throw new UnprocessableError()
        }

        const id = this.idGenerator.generate()
        const userId = isTokenValid.id

        const post = new Post(
            id,
            content,
            userId
        )

        await this.postDatabase.createPost(post)

        const response = {
            message: "Post criado com sucesso"
        }

        return response
    }

    public getPosts = async (token: string) => {
        const isTokenValid = this.authenticator.getTokenPayload(token)

        if(!isTokenValid) {
            throw new AuthorizationError()
        }

        const postsDB: IPostDB[] = await this.postDatabase.getPosts()
        

        const posts = postsDB.map( postDB => {
            return new Post(
                postDB.id,
                postDB.content,
                postDB.user_id
            )
        })

        posts.forEach(async post => {
            const postId = post.getId()

            const likes = await this.postDatabase.getLikes(postId)
            post.setLikes(likes)
        })

        const response: IGetPostsOutputDTO = {
            posts
        }

        return response
    }
}