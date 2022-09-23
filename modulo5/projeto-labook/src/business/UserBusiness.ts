import { UserDatabase } from "../database/UserDatabase"
import { ConflictError } from "../errors/ConflictError"
import { ParamsError } from "../errors/ParamsError"
import { UnprocessableError } from "../errors/UnprocessableError"
import { ISignupInputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public async signup(input: ISignupInputDTO) {

        const {name, email, password} = input
        const emailValidator: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(!name || !email || !password) {
            throw new ParamsError()
        }

        if(
            !(name.length < 3) || 
            !(password.length < 6) ||
            !(typeof name === "string") ||
            !(typeof email === "string") ||
            !(typeof password === "string") ||
            !(email.match(emailValidator))
            ) {
            throw new UnprocessableError()
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if (userDB) {
            throw new ConflictError()
        }

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword,
            USER_ROLES.NORMAL
        )

        await this.userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: "Cadastro realizado com sucesso",
            token
        }

        return response
    }
}