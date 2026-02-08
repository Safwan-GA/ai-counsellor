import { useState } from "react";
import axios from "../../api/axios";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Spinner from "../../common/spinner";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const res = await axios.post("/auth/login", { email, password });

      const token = res.data.token;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const meRes = await axios.get("/auth/me");
      setUser(meRes.data.user);

      if (meRes.data.user.profileComplete) {
        navigate("/dashboard");
      } else {
        navigate("/onboarding");
      }
    } catch (err) {
      console.error("LOGIN ERROR:", err.response?.data || err.message);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
      {loading && <FullScreenOverlay />}

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 w-full max-w-sm space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center">Sign In</h2>

        <input
          className="input-field w-full"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />

        <input
          className="input-field w-full"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full flex justify-center items-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? <Spinner /> : "Login"}
        </button>
      </form>
    </div>
  );
}

function FullScreenOverlay() {
  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <Spinner />
      </div>
    </div>
  );
}
