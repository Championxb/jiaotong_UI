import axios from "axios";
import router from "@/router";

const service = axios.create({
  timeout: 5000,
  baseURL: "/api",
});

service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    //x-www-form-urlencoded
    if (config.method === "post") {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  // 可能是在resolve之前拦截，return的值是resolve的值
  (response) => {
    return response.data;
  },
  /* 
      可能是在reject之前拦截，该函数不定义，调用service时可以正常捕获错误，
      一旦定义，必须返回Promise.reject(error)，才能确保调用service时错误被捕获。
    */
  (error) => {
    if (error.response && error.response.status === 401) {
      //   msg.error("Token 已过期，请重新登录。");
      localStorage.removeItem("token");
      router.push("/login");
    } else if (error.response?.data?.message) {
      //   msg.error(error.response.data.message);
    }
    return Promise.reject(error);
  }
);

export default service;

export const downloadService = axios.create();
