import mongoose from 'mongoose'
import mogoose from 'mongoose'

const connectDB=async()=>{
    try {
        mongoose.connection.on("connected",()=>{
            console.log("Database connected")
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/canvo`)
    } catch (error) {
       console.log(error.message) 
    }
}

export default connectDB