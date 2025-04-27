import mongoose from 'mongoose'
import { configDotenv } from 'dotenv'
configDotenv()
const connectDB = async () =>{
    try {
        const DB = await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("DB connect successfully:",DB.connections[0].host);

    } catch (error) {
        console.log("Error :",error.message);
    }
}

export default connectDB