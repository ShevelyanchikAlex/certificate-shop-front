import axios from "axios";

class CertificateService {
    static async getAll() {
        return await axios.get("http://localhost:8080/certificates");
    }

    static async getById(id) {
        return await axios.get("http://localhost:8080/certificates/" + id);
    }
}

export default CertificateService;