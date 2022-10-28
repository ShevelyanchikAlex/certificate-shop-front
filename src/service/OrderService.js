import axios from "axios";
import {Cookies} from "react-cookie";

const API_URL = "http://localhost:8080/orders";
const cookies = new Cookies();

class OrderService {
    static async getAllOrders() {
        return await axios.get(API_URL,
            {
                headers: {
                    'Authorization': cookies.get("token"),
                }
            }
        );
    };

    static async getOrderById(id) {
        return await axios.get(`${API_URL}/${id}`,
            {
                headers: {
                    'Authorization': cookies.get("token"),
                }
            }
        );
    };
}

export default OrderService;