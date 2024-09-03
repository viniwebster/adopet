import axios from "axios";
import { IUser } from "interfaces/IUser";

const http = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        Accept: "application/json",
    }
})

export const getAllUsers = async () : Promise<IUser[]> => {
    const response = await http.get("/users")
    return response.data 
}

export const createUser = async (data : IUser) : Promise<IUser>  => {
    const response = await http.post("/users", data)
    return response.data
}

export const getAllPets = async () => {
    const response = await http.get("/pets")
    return response.data
}

export const getPet = async (id : number) => {
    const response = await http.get(`/pets/${id}`)
    return response.data
}

export default http