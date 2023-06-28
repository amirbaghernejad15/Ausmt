const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (request, response) => {
    response.status(200).json({
        message: 'Hello Node App Dockerize!',
    })
})

app.listen(PORT, () => {
    console.log(`Server is up on localhost:${PORT}`)
} 