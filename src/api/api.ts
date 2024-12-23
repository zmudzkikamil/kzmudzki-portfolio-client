import Axios from "axios";

export const api = Axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.error(message);

    return Promise.reject(error);
  },
);
