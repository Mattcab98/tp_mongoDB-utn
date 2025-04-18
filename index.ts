import mongoose, { Schema, Document } from "mongoose";
import { connectDB } from "./config/mongo";

connectDB();

interface UserInterface extends Document {
    userName: string;
    name: string;
    age: number;
    email: string;
    city: string;
    role?: "user" | "admin";
};

const UserSchema: Schema = new Schema<UserInterface> ({
    userName: { type: String, required: true, unique: true }, 
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
            // userName: "",
            // name: "",
            // age: 22,
            // email: "",
            // city: ""
        })

        await newUser.save()
        console.log("Usuario creado")

    } catch (error) {
        console.log(error)
        console.log('error al registrar el usuario .... ')
    };
};


const getUser = async () => {
    try {
        const users = await UserModel.find();
        console.log(users);
        return users
    } catch (error) {
        console.log(error);
        console.log('LOS USUARIOS NO PUDIERON SER CARGADOS');

    }
}

const getSearchUser = async (name: string) => {
    try {
        const users = await getUser();
        
        const user = users?.find(user => user.name.toLowerCase().includes(name.toLowerCase()));
        console.log(`El usuario ha sido encontrado ${user}`);

    } catch (error) {
        console.log(error);
        console.log('Usuario no encontrado');
    }
}


const updateUser = async (id: string, body: object) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(id, body, {new: true})
        if (!updatedUser) {
            console.log('El usuario no pudo ser encontrado')
        } else {
            console.log(updatedUser);
        }
    } catch (error) {
        console.log('ERROR EN LA BUSQUEDA DEL USUARIO')
    }
}