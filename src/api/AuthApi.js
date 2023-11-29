import BaseApi from "./config/BaseApi";
import {API_KEY_CREATOR} from "./config/instanse";


class AuthApi extends BaseApi {
    getAuthUser = () => this.getData(`auth/me`);

    sendLoginForm = () => this.postData('/auth/login', API_KEY_CREATOR())
}

export default AuthApi