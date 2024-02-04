import mongoose from 'mongoose'

const uri = `mongodb+srv://user:pass@cluster0.ryd9hlg.mongodb.net/?retryWrites=true&w=majority`

const dbConn = async () => {
    if (!global.mongoose) {
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(uri)
    }
}

export default dbConn