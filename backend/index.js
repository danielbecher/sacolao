import express from 'express'
import bodyParser from 'body-parser'
import productsController from './src/controllers/products.js'

import basicAuth from 'express-basic-auth'

const app = express()
const port = process.env.PORT || 3000

app.use(basicAuth({
    users: {
        "admininastro": "sacol@um@123"
    }
}))
app.use(bodyParser.json())
app.use('/', productsController)
app.listen(port, () => {
    console.log(`Server listening to port ${port}`)
})