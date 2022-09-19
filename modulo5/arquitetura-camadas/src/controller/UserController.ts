import { Request, Response } from "express";

export class UserController {
    async signup(req: Request, res: Response) {
        try {
            
            const {name, email, password} = req.body

            

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || error.sqlMessage })
        }
    }
}