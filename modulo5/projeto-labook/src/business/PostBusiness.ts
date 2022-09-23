import { PostDatabase } from "../database/PostDatabase"
import { AuthorizationError } from "../errors/AuthorizationError"
import { UnprocessableError } from "../errors/UnprocessableError"
import { ICreatePostInputDTO, Post } from "../models/Post"
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
}