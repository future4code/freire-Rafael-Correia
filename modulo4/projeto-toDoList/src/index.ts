import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import getUser from './endpoints/getUser'
import createUser from './endpoints/createUser'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get('/user/:id', getUser)

app.put('/user', createUser)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})