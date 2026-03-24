import mongoose from 'mongoose';
import bcrypt from "bcryptjs";

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String, required:true},
    credits:{type:Number, default:20}
})

userSchema.pre('save',async function (){
    if(!this.isModified("password")) return;

    const salt= await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password,salt);
    console.log('hasedpassword',hashedPassword)

    this.password = hashedPassword
})

const User= mongoose.model('User',userSchema)

export default User;