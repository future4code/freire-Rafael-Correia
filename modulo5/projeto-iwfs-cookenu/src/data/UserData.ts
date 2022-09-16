import { UserEntity } from "../entities/UserEntity"
import BaseDataBase from "./BaseDataBase"

class UserData extends BaseDataBase {
    public userTableName = "cookenu_user"

    async insertUser(user: UserEntity): Promise<void> {
        await this.getConnection().insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        })
            .into(this.userTableName)
    }

    async selectUserByEmail(email: string): Promise<UserEntity> {
        const result = await this.getConnection()
            .select("*")
            .from(this.userTableName)
            .where({ email })

        return new UserEntity(result[0].id, result[0].name, result[0].email, result[0].password, result[0].role)
    }

    public async selectUserById(id: string): Promise<any> {
        const result = await this.getConnection()
            .select("*")
            .from(this.userTableName)
            .where({ id })

        return new UserEntity(result[0].id, result[0].name, result[0].email, result[0].password, result[0].role)
    }
}

export default UserData