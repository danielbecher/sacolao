import dbConn from "../utils/db.js"
import Product from "../models/product.js"

export const listProducts = async () => {
    await dbConn()
    const product = await Product.find()
    return product
}

export const createProducts = async (product) => {
    await dbConn()
    const createdProduct = await Product.create(product)
    return createdProduct
}

export const deleteProducts = async (id) => {
    await dbConn()
    await Product.findByIdAndDelete(id)    
}

export const updateProducts = async (id, newBody) => {
    await dbConn()
    await findByIdAndUpdate(id, newBody)
}