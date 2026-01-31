import { useAuth } from "../../hooks/useAuth";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("/auth/logout"); // backend optional
    } catch (err) {
      console.error(err);
    } finally {
      localStorage.removeItem("token"); // remove JWT
      setUser(null);                   // reset context
      navigate("/");
    }
  };

  return (
    <button onClick={handleLogout} className="btn-secondary">
      Logout
    </button>
  );
}
