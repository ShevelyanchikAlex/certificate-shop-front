import axios from "axios";
import {Cookies} from "react-cookie";

const API_URL = "http://localhost:8080/auth";
const cookies = new Cookies();

class AuthService {
    static async login(request) {
        return await axios.post(`${API_URL}/login`, request);
    };

    static async signUp(request) {
        return await axios.post(`${API_URL}/signup`, request);
    };

    static async logout() {
        cookies.remove("token", {path: '/'});
        localStorage.removeItem("user-email");
    }
}

export default AuthService;