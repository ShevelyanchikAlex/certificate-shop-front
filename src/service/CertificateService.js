import axios from "axios";
import {Cookies} from "react-cookie";

const API_URL = "http://localhost:8080/certificates";
const cookies = new Cookies();

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

    static async save(request) {
        return await axios.post(`${API_URL}`,  request, {
            headers: {
                'Authorization': cookies.get("token"),
            }
        });
    };


    static async update(request) {
        return await axios.patch(`${API_URL}`,  request, {
            headers: {
                'Authorization': cookies.get("token"),
            }
        });
    };

    static async delete(id) {
        return await axios.delete(`${API_URL}/${id}`, {
            headers: {
                'Authorization': cookies.get("token"),
            }
        });
    };
}

export default CertificateService;