import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    withCredentials: true
});

axiosInstance.interceptors.response.use(
    (response) => response.data.data,
    (error) => Promise.reject(error.response.data)
);

export default axiosInstance;