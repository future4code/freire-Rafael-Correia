import { Request, Response } from "express"
import UserData from "../data/UserData"
import { InvalidEmail } from "../error/InvalidEmail"
import { InvalidRole } from "../error/InvalidRole"
import { InvalidPassword } from "../error/InvalidPassword"
import { UsuarioNormalApenas } from "../error/UsuarioNormalApenas"
import { IdGenerator } from "../services/IdGenerator"
import { gerarToken } from "../services/gerarToken"
import { HashManager } from "../services/HashManager"
import { pegarDados } from "../services/pegarDados"
import { UserEntity, USER_ROLES } from "../entities/UserEntity"

export class User {
    public async createUser(req: Request, res: Response) {
        try {

            const { name, email, password, role } = req.body

            if (!email || !(email.includes('@'))) {
                throw new InvalidEmail()
            }

            if (!password || password.length < 6) {
                throw new InvalidPassword()
            }

            if (!Object.values(USER_ROLES).includes(role)) {
                throw new InvalidRole()
            }

            const userData: UserData = new UserData()
            const hashManager: HashManager = new HashManager()

            const id: IdGenerator = new IdGenerator()

            const hashPassword = await hashManager.hash(password)

            const user: UserEntity = new UserEntity(id.generateId(),name, email, hashPassword, role)

            await userData.insertUser(user)

            const token = gerarToken({
                id: user.getId(),
                role,
            })

            res.status(200).send({
                token: token
            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.sqlMessage || error.message })
        }
    }

    public async login(req: Request, res: Response) {
        try {

            const { email, password } = req.body

            if (!email || !(email.includes('@'))) {
                throw new InvalidEmail()
            }

            const userData: UserData = new UserData()
            const hashManager: HashManager = new HashManager()

            const user: UserEntity = await userData.selectUserByEmail(email)

            const compareHash = await hashManager.compare(
                password,
                user.getPassword()
            )

            if (!compareHash) {
                throw new InvalidPassword()
            }

            const token = gerarToken({
                id: user.getId(),
                role: user.getRole(),
            })

            res.status(200).send({
                token,
            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.sqlMessage || error.message })
        }
    }

    public async pegarDadosUsuario(req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string

            const authenticationData = pegarDados(token)

            const userData: UserData = new UserData()

            const usuario = await userData.selecionarUsuarioPorId(authenticationData.id)

            if (usuario.role !== "normal") {
                throw new UsuarioNormalApenas()
            }

            res.status(200).send({
                id: usuario.id,
                email: usuario.email
            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.sqlMessage || error.message })
        }
    }
}