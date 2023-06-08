


import axios from "axios";

const baseUrl = "http://localhost:1337";
const API = axios.create({baseURL: baseUrl})



export const getFilmInformation = () =>{
    return API.get('/blue/films') 
}
export const login = ({formData})=>{
    return API.post('/auth/login',formData)
}
export const signUp = ({formData})=>{
    return API.post('/auth/signUp',formData)
}


