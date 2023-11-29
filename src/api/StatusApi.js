import BaseApi from "./config/BaseApi";

class StatusApi extends BaseApi {
    updateStatusUser = status => {
        debugger
        return this.putData(`profile/status`, {status: status});
    }
    getStatusUser = id => {
        return this.getData(`/profile/status/${id}`);
    }
}

export default StatusApi