import mongoose, {schema, document} from 'mongoose';

const MONGO_URL = ProcessingInstruction.env.MONGO_URL;

export const connectDB = async ()=>{
    try{
        await mongoose.connect(MONGO_URL, {});
        mongoose.connection.on("connected", console.log("Database connected successfully..."));
    }catch(err){
        console.error("error connection to database!!!! ", err);
    }
};

export default connectDB