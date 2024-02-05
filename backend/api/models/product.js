import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    active: { type: Boolean, required: true },
    unity: { type: String, required: true },
    price: { type: Number, required: true}
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)