import axios from "./axios";

export const submitOnboarding = (data) => axios.post("/user/onboarding", data);
export const getDashboard = () => axios.get("/dashboard");
