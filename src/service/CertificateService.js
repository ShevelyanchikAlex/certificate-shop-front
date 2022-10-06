import axios from "axios";

const API_URL = "http://localhost:8080/certificates";

class CertificateService {
    static async getAll(page = 1, size = 10) {
        return await axios.get(API_URL, {
            params: {
                pageIndex: page,
                size: size,
            }
        });
    }

    static async getById(id) {
        return await axios.get(`${API_URL}/${id}`);
    }
}

export default CertificateService;