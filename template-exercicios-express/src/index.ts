import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (request, response) => {
    console.log("Deu certo!")
    
    response.status(201).send("OK!")
})

app.listen(3000, () => {
    console.log("Servidor rodando")
})
