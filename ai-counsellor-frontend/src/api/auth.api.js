import axios from "./axios";

export const login = (data) => axios.post("/auth/login", data);
export const signup = (data) => axios.post("/auth/signup", data);
export const logout = () => axios.post("/auth/logout");
export const getMe = () => axios.get("/auth/me");
