import mongoose, { Schema, Document } from "mongoose";
import { connectDB } from "./config/mongo";

connectDB();

interface UserInterface extends Document {
    name: string;
    age: number;
    email: string;
    city: string;
    role?: "user" | "admin";
};


const UserSchema: Schema = new Schema<UserInterface> ({
    name: { type: String, required: true }, 
    age: { type: Number, required: true, min: 18 }, 
    email: { type: String, required: true, unique: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }, 
    city: { type: String, required: true }, 
    role: { type: String, required: true, enum: [ "user", "admin"], default: "user" } 
}, { timestamps: false, versionKey: false });

UserSchema.set("strict", true);

const UserModel = mongoose.model<UserInterface>("user", UserSchema);

const createUser = async () => {
    try {
        const newUser: UserInterface = new UserModel({
            name: "Veronica Alvarez Bustos",
            age: 43,
            email: "veronica_ab@hotmail.com",
            city: "Monte Cristo",
            role: "admin"
        })

        await newUser.save()
        console.log("Usuario creado")

    } catch (error) {
        console.log('error al registrar el usuario .... ')
    };
};

createUser();