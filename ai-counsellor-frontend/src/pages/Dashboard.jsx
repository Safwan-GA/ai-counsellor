import { useEffect, useState } from "react";
import axios from "../api/axios";
import ProfileSummary from "../components/dashboard/ProfileSummary";
import CurrentStage from "../components/dashboard/CurrentStage";
import TodoList from "../components/dashboard/TodoList";
// import {user} from useAuth
import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [stage, setStage] = useState("Onboarding"); // default stage
  const {user}=useAuth()

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get("/dashboard");
        console.log("Dashboard API response:", res.data); // 🔥 debug
        console.log(user)
        
        const profileWithName = res.data.profile
          ? { ...res.data.profile, name: user.name }
          : { name: user.name }; // fallback if profile is null

        setProfile(profileWithName);
        setTasks(res.data.tasks);
      } catch (err) {
        console.error("Dashboard fetch error:", err.response || err.message);
      }
    };
    fetchDashboard();
  }, []);

  if (!profile) return <div className="p-6">Loading dashboard...</div>;

  return (
    <div className="p-6 space-y-6">
      <ProfileSummary profile={profile} />
      <CurrentStage stage={profile.currentStage || "Exploring"} />
      <TodoList tasks={tasks} />
    </div>
  );
}