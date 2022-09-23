import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { ICreatePostInputDTO } from "../models/Post";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}
    
    public createPost = async (req: Request, res: Response) => {
        try {
            const  token  = req.headers.authorization as string
            const { content } = req.body

            const input: ICreatePostInputDTO = {
                token,
                content
            }

            const response = await this.postBusiness.createPost(input)

            res.status(201).send(response)
        } catch (error: any) {
            res.status( error.statusCode || 500).send({ message: error.message || error.sqlMessage })
        }
    }

    public getPosts = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            const response = await this.postBusiness.getPosts(token)

            res.status(200).send(response)
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || error.sqlMessage })
        }
    }
}