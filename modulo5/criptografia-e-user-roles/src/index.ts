import { app } from "./app"
import { UserEndpoint } from "./endpoints/UserEnpoint"

const userEndpoint: UserEndpoint = new UserEndpoint()

app.get("/usuario/login", userEndpoint.login)
app.get("/usuario/profile", userEndpoint.pegarDadosUsuario)
app.post("/usuario/cadastrar", userEndpoint.criarUsuario)