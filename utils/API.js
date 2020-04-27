import axios from "./node_modules/axios"; 

export default {
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
}