import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const createUsers = (user) => async (nombre, email, password) => {

    try{

        const response = await axios.post(
            `${BASE_URL}/auth/register`,
            {
                nombre,
                email,
                password,

            })
            return response.data;
    }
    catch(error){
        console.log(error);
    }



}