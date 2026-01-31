import axios from "./axios";

export const sendChatMessage = (message) =>
  axios.post("/chat", { message });
