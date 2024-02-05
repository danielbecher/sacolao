import mongoose from 'mongoose'

const uri = `mongodb+srv://sacolao:RP0wi599ZfNkOP8b@cluster0.ryd9hlg.mongodb.net/?retryWrites=true&w=majority`

const dbConn = async () => {
    if (!global.mongoose) {
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(uri)
    }
}

export default dbConn