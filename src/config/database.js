import mongoose  from "mongoose";

export function ConnectDB(){
        mongoose.connect(process.env.MONGO_URL)
            .then(() => console.log('mongodb connect !'))
            .catch((err) => console.log('Databse ' + err))
}