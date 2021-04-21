import express from "express"

import "./database"

const app = express()

app.get("/", (request, response) => {
    // return response.send('Olá NLW 05')
    return response.json({
        message: 'ola nlw 05',
    })
})

app.post("/users", (request, response) => {
    return response.json({
        message: "dados salvos com sucesso",
    })
})

app.listen(3333, () => console.log('server running on port 3333'))

