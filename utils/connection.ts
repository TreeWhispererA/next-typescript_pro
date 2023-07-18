//IMPORT MONGOOSE 
import mongoose , { Model } from 'mongoose';
 
//CONNECTING TO MONGOOSE
const {DATABASE_URL} = process.env;

//connection function
export const connect = async() => {
    const conn = await mongoose
        .connect(DATABASE_URL as string)
            .catch(err =>  console.log(err))

    console.log("database connected");

    // OUR TODO SCHEMA
    const TodoSchema = new mongoose.Schema({
        item : String,
        completed : Boolean
    });

    // SET OUR MODEL 
    const Todo = mongoose.models.Todo || mongoose.model("Todo" , TodoSchema);
    // assign mongoose model into Todo constant variable and check whether Todo model is exist in mongoose. If not it creates new model.
}