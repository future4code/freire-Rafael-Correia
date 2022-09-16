import { app } from "./app"
import { User } from "./endpoints/User"

const user: User = new User()

app.get("/login", user.login)
app.get("/user/profile", user.getUserProfile)
app.get("/user/:id", user.getAnotherUserProfile)
app.post("/signup", user.createUser)