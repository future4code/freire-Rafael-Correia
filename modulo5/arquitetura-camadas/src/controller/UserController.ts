import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    async signup(req: Request, res: Response) {
        try {
            
            const {name, email, password} = req.body

            const userBusiness = new UserBusiness()

            const token = await userBusiness.create(name, email, password)

            res.status(201).send({ token: token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || error.sqlMessage })
        }
    }
}