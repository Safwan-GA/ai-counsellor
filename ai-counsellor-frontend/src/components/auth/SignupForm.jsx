import { useState } from "react";
import axios from "../../api/axios";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SIGNUP SUBMITTED"); // 🔥 MUST appear

    try {
      const res = await axios.post("/auth/signup", { name, email, password });
      console.log("SIGNUP RESPONSE:", res.data);

      const token = res.data.token;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const meRes = await axios.get("/auth/me");
      setUser(meRes.data.user); // updates state asynchronously

      navigate("/onboarding");

    } catch (err) {
      console.error("SIGNUP ERROR:", err.response?.data || err.message);
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 w-full max-w-sm space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center">Create Account</h2>

        <input
          className="input-field w-full"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="input-field w-full"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="input-field w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn-primary w-full">
          Create Account
        </button>
      </form>
    </div>
  );
}
