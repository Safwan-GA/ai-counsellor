import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../../common/spinner";

export default function LogoutButton() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    if (loading) return;
    setLoading(true);

    try {
      await axios.post("/auth/logout");
    } catch (err) {
      console.error(err);
    } finally {
      localStorage.removeItem("token");
      setUser(null);
      navigate("/");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="btn-secondary flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? <Spinner /> : "Logout"}
    </button>
  );
}
