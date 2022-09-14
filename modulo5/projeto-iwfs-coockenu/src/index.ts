import { app } from "./app"
import { User } from "./endpoints/User"

const user: User = new User()

app.get("/usuario/login", user.login)
app.get("/usuario/profile", user.pegarDadosUsuario)
app.post("/usuario/cadastrar", user.createUser)