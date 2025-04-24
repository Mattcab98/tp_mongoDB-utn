import mongoose, { Schema } from "mongoose";

interface UserInterface {
    userName: string;
    name: string;
    age: number;
    email: string;
    city: string;
    role?: "user" | "admin";
};

const UserSchema: Schema = new Schema<UserInterface>({
    userName: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true, min: 18 },
    email: { type: String, required: true, unique: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    city: { type: String, required: true },
    role: { type: String, required: true, enum: ["user", "admin"], default: "user" }
}, { timestamps: false, versionKey: false });

UserSchema.set("strict", true);

const UserModel = mongoose.model<UserInterface>("user", UserSchema);

const createUser = async (data: UserInterface) => {
    try {
        const newUser = new UserModel(data);
        return await newUser.save()
        // console.log("Usuario creado")
    } catch (error: any) {
        return { message: error.message}
    };
}; 

const getUser = async () => {
    try {
        const users = await UserModel.find();
        console.log(users)
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

        if (!user) {
            console.log('El usuario no pudo ser encontrado');
        } else {
            console.log('La busqueda del usuario fue realizada con exito: ', user);
        }

    } catch (error) {
        console.log(error);
        console.log('Usuario no encontrado');
    }
}

const updateUser = async (id: string, body: object) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(id, body, { new: true })
        if (!updatedUser) {
            console.log('El usuario no pudo ser encontrado')
        } else {
            console.log(updatedUser);
        }
    } catch (error) {
        console.log('ERROR EN LA BUSQUEDA DEL USUARIO')
    }
}

const deleteUser = async (id: String) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(id)
        if (!deletedUser) {
            console.log('Usuario no encontrado, no pudo ser eliminado');
        } else {
            console.log(`El usaurio ${deleteUser} a sido eliminado correctamente`);
        }
    } catch (error) {
        console.log(error);
        console.log('ERROR AL ACCEDER A LOS USUARIOS');
    }

}

export { createUser, getUser, getSearchUser, updateUser, deleteUser }