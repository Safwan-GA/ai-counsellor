import { useEffect, useState } from "react";
import axios from "../api/axios";
import UniversityList from "../components/universities/UniversityList";
import { useAuth } from "../hooks/useAuth";

export default function Universities() {
  const [universities, setUniversities] = useState([]);
  const [lockedUniversity, setLockedUniversity] = useState(null);
  const [shortlisted, setShortlisted] = useState([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      const res = await axios.get("/universities");
      console.log("Universities API response:", res.data);
      setUniversities(res.data); // ✅ FIXED
    };
    fetchUniversities();
  }, []);

  const handleShortlist = async (id) => {
    await axios.post(`/shortlist/${id}`);
    setShortlisted((prev) => [...prev, id]);
  };

  const { setUser } = useAuth();

  const handleLock = async (id) => {
    const res = await axios.post(`/lock/${id}`);
    setLockedUniversity(id);

    // update auth state so ProtectedRoute works
    setUser(prev => ({
      ...prev,
      lockedUniversity: id,
      stage: "Preparing Applications",
    }));
  };


  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Recommended Universities</h2>
      <UniversityList
        universities={universities}
        lockedUniversity={lockedUniversity}
        shortlisted={shortlisted}
        onShortlist={handleShortlist}
        onLock={handleLock}
      />
    </div>
  );
}
