import axios from "axios";

const API_URL = "http://localhost:8080/auth";

class AuthService {
    static async login(request) {
        return await axios.post(`${API_URL}/login`, request);
    };
}

export default AuthService;