import mongoose from "mongoose";

  export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://mangalbhusanur:99520655@cluster0.hcvn1.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}