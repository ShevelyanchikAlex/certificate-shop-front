import axios from "axios";
import {Cookies} from "react-cookie";

const API_URL = "http://localhost:8080/users";
const cookies = new Cookies();

class UserService {

    static async getAllUsers() {
        return await axios.get(API_URL,
            {
                headers: {
                    'Authorization': cookies.get("token"),
                }
            }
        );
    };
}

export default UserService;