import * as jwt from "jsonwebtoken"

const expiresIn = "5min"
export const gerarToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
        {
            id: input.id,
            role: input.role,
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    );
    return token
}

export type AuthenticationData = {
    id: string,
    role: string
}