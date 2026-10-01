import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const connectionToDB = async () => {
    try {
        const connectionToDB = await mongoose.connect(
            process.env.MONGO_URI || 'mongodb+srv://<db_username>:dAHbJ8XO9AyK54Xe@pmashishapi.5pqu8qy.mongodb.net/?appName=PMAshishAPI'
        );

        if(connection) {
            console.log(`Connected to MongoDB: ${connection.host}`);
        }
    } catch(e) {
        console.log(e);
        process.exit(1);
    }
}

export default connectionToDB;