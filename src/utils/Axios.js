import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    // Authorization: `${localStorage.getItem("token")}`,
  },
  withCredentials: true,
});

export default Axios;
