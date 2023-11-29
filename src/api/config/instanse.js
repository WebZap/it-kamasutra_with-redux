
import axios from "axios"

const API_KEY = 'b3184f63-d6d2-4b5e-9978-4196203e6528';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})


export const API_KEY_CREATOR = () => {
    return {
        header: {
            "API-KEY": API_KEY,
        }
    }
}

export default instance