import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import { useEffect } from "react";
import { useError } from "./context/ErrorContext";

export default function App() {
  const { setError } = useError();

  useEffect(() => {
    const handler = (e) => setError(e.detail);
    window.addEventListener("api-error", handler);
    return () => window.removeEventListener("api-error", handler);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AppRoutes />
    </div>
  );
}


