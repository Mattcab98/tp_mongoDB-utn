import { createUser, getUser, getSearchUser, updateUser, deleteUser } from './controllers'

const main = async () => {
    const createdUser = await createUser({
        userName: "",
        name: "",
        age: 2,
        email: "",
        city: "",
        role: "user"})
}