import axios from 'axios';
// import router from 'express';
const URL = 'http://localhost:8080';
export const addUser = async (user) => {

    console.log("values from frontend:-", user)
    return await axios.post(`${URL}/add`, user)
    // return await axios.post(`${URL}/add`, user);
}