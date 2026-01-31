import { useState } from "react";
import axios from "../../api/axios";

export default function ChatUI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const res = await axios.post("/chat", { message: input });
    setMessages((prev) => [...prev, { role: "assistant", content: res.data.reply }]);
  };

  return (
    <div className="flex flex-col h-[80vh] border rounded-lg p-4">
      <div className="flex-1 overflow-y-auto space-y-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-3 rounded max-w-[75%] ${
              m.role === "user" ? "bg-blue-600 text-white ml-auto" : "bg-gray-100"
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        <input
          className="input flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your counsellor..."
        />
        <button className="btn-primary" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
