import { Router } from "express"
import { listProducts, createProducts, deleteProducts, updateProducts } from "../services/products.js"

const router = Router()

router.get('/', async (req, res) => {
    const productsList  = await listProducts()
    res.send(productsList)
})

router.post('/', async (req, res) => {
    const product = await createProducts(req.body)
    res.status(201).send(product)
})

router.delete('/:productId', async (req, res) => {
    await deleteProducts(req.params.productId)
    res.send()
})

router.put('/:productId', async (req, res) => {
    await updateProducts(req.params.productId, req.body)
    res.send()
})

export default router