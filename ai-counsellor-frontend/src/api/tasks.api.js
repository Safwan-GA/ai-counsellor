import axios from "./axios";

export const getTasks = () => axios.get("/tasks");
export const toggleTask = (id) => axios.patch(`/tasks/${id}/toggle`);
