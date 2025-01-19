import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!) //'!' marks tells typescript that we know that this will be a string
        console.log(`Successfully conected to Database`)
    } catch (error : any) {
        console.error(`Error ${error.message}`)
        process.exit(1)
    }
}

export default connectDB