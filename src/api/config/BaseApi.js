import instance from "./instanse"

class BaseApi {

    getData = async (url) => {
        const response = await instance.get(url);
        return response.data
    }
    postData = async (url, key = null) => {
        const response = await instance.post(url, key);
        return response.data
    }
    deleteData = async (url, key) => {
        const response = await instance.delete(url, key)
        return response.data
    }
    putData = async (url, data) => {
        const response = await instance.put(url, data);
        return response.data;
    }
}

export default BaseApi




