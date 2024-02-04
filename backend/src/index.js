import express from 'express'
import bodyParser from 'body-parser'
import productsController from './controllers/products.js'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use('/', productsController)

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`)
})