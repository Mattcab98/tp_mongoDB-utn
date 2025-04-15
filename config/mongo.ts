import mongoose from "mongoose";

process.loadEnvFile();

const URI_DB = process.env.URI_DB || "";


const connectDB = async () => {
    try {
        await mongoose.connect(URI_DB);
        console.log("se conecto a la base de datos MONGO_DB Correctamente");
    } catch (error) {
        console.log('error al conectar la base de datos')
    }
};

export { connectDB }; 