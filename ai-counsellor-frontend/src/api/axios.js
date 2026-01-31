import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: attach token if using JWT
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  res => res,
  err => {
    const message =
      err.response?.data?.message ||
      err.message ||
      "Unexpected error occurred";

    window.dispatchEvent(new CustomEvent("api-error", { detail: message }));
    return Promise.reject(err);
  }
);

export default instance;
