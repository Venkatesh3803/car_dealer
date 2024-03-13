import axios from "axios"
import { toast } from "react-toastify";
// export const baseUrl = "http://localhost:8800/api";
export const baseUrl = "https://car-dealer-pngo.onrender.com/api";


export const AuthRequest = async (url, method, data, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    const config = {
        method,
        url: `${baseUrl}${url}`,
        headers,
        data,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        toast.error(error.response.data)
        throw error;
    }
}

export const CarRequests = async (url, method, data, token) => {
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    const config = {
        method,
        url: `${baseUrl}${url}`,
        headers,
        data,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        toast.error(error.response.data)
        throw error;
    }
}

export const UserRequests = async (url, method, data, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    const config = {
        method,
        url: `${baseUrl}${url}`,
        headers,
        data,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        toast.error(error.response.data)
        throw error;
    }
}