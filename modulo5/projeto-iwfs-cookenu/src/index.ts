import { app } from "./app"
import { User } from "./endpoints/User"

const user: User = new User()

app.get("/login", user.login)
app.get("/user/profile", user.pegarDadosUsuario)
app.post("/signup", user.createUser)