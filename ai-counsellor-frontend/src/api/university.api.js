import axios from "./axios";

export const getUniversities = () => axios.get("/universities");
export const shortlistUniversity = (id) => axios.post(`/universities/${id}/shortlist`);
export const lockUniversity = (id) => axios.post(`/universities/${id}/lock`);
