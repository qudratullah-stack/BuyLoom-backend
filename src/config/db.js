import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config()
 export const dbconnect = async()=>{
   try{
       await mongoose.connect(process.env.MONGO_URL);
        console.log('mongodb connected successfully')
   }catch(err){
   console.error(err.message)
   }
}

 