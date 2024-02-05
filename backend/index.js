import express from 'express'
import bodyParser from 'body-parser'
import productsController from './src/controllers/products.js'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.use('/', productsController)

app.listen(port, () => {
    console.log(`Server listening to port ${port}`)
})