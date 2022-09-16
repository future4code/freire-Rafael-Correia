import { RecipeEntity } from "../entities/RecipeEntity"
import BaseDataBase from "./BaseDataBase"

class RecipeData extends BaseDataBase {
    public recipeTableName = "cookenu_recipe"

    async insertRecipe(recipe: RecipeEntity): Promise<void> {
        await this.getConnection().insert({
            id: recipe.getId(),
            name: recipe.getTitle(),
            email: recipe.getDescription(),
            password: recipe.getDate()
        })
            .into(this.recipeTableName)
    }

    async linkRecipeToUser(userId: string, recipeId: string): Promise<void> {
        await this.getConnection().insert({
            user_id: userId,
            recipe_id: recipeId
        })
            .into("cookenu_link_recipe_user")
    }

    // async selectUserByEmail(email: string): Promise<UserEntity> {
    //     const result = await this.getConnection()
    //         .select("*")
    //         .from(this.userTableName)
    //         .where({ email })

    //     return new UserEntity(result[0].id, result[0].name, result[0].email, result[0].password, result[0].role)
    // }

    // public async selectUserById(id: string): Promise<any> {
    //     const result = await this.getConnection()
    //         .select("*")
    //         .from(this.userTableName)
    //         .where({ id })

    //     return new UserEntity(result[0].id, result[0].name, result[0].email, result[0].password, result[0].role)
    // }
}

export default RecipeData