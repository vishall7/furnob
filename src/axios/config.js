import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://furnob-backend.onrender.com/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://furnob-backend.onrender.com",
    },
    withCredentials: true
});

axiosInstance.interceptors.response.use(
    (response) => response.data.data,
    (error) => Promise.reject(error.response.data)
);

export default axiosInstance;