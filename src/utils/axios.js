import axios from "axios";
import { baseURL } from "@/config";

const axiosServices = axios.create({ baseURL: `${baseURL}` });

// axiosServices.defaults.headers.common.Authorization = `Barear ${storageToken}`;

axiosServices.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosServices;
