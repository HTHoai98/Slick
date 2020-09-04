import axios from "axios";
import cookies from "next-cookies";

import config from "config";

export const Axios = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: `${config.NODE_BASE_URL}/api`,
});

axios.interceptors.request.use(
  function (config) {
    const { token } = cookies("");
    if (token) {
      config.headers = {
        "x-auth-token": "Bearer " + token,
      };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export const ChatServiceAxios = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: `${config.CHAT_SERVICE_URL}`,
});

export default Axios;
