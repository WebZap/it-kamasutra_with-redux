import {API_KEY_CREATOR} from "./config/instanse";
import BaseApi from "./config/BaseApi";

class UsersApi extends BaseApi {

    getUsers = currentPage => {
        return this.getData(`users?count=5&page=${currentPage}`)
    }
    getEntireUser = id => {
        return this.getData(`profile/${id}`);
    }
    followUser = id => {
        return this.postData(`/follow/${id}`, API_KEY_CREATOR())
    }
    unfollowUser = id => {
        return this.deleteData(`/follow/${id}`, API_KEY_CREATOR());
    }
}

export default UsersApi







