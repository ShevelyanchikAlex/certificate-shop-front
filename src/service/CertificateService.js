import axios from "axios";

class CertificateService {
    static async getAll(page = 1, size = 10) {
        return await axios.get("http://localhost:8080/certificates", {
            params: {
                pageIndex: page,
                size: size,
            }
        });
    }

    static async getById(id) {
        return await axios.get("http://localhost:8080/certificates/" + id);
    }

    static async login(email) {
        return await axios.post("http://localhost:8080/login", {
            email: email,
            credentials: 'include',
            method: 'POST',
        })
    }
}

export default CertificateService;