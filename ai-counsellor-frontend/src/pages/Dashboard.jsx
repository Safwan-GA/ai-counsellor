import { useEffect, useState } from "react";
import axios from "../api/axios";
import ProfileSummary from "../components/dashboard/ProfileSummary";
import CurrentStage from "../components/dashboard/CurrentStage";
import TodoList from "../components/dashboard/TodoList";
import { useAuth } from "../hooks/useAuth";
import OnboardingForm from "../components/onboarding/OnboardingForm";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [stage, setStage] = useState("Exploring");
  const [showOnboarding, setShowOnboarding] = useState(false);
  const { user, setUser } = useAuth();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get("/dashboard");
        setProfile(res.data.profile);
        setTasks(res.data.tasks || []);
        setStage(res.data.stage || "Exploring");
      } catch (err) {
        console.error("Dashboard fetch error:", err.response || err.message);
      }
    };

    fetchDashboard();
  }, []);

  if (!profile) return <div className="p-6">Loading dashboard...</div>;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <button
          className="btn-primary text-sm"
          onClick={() => setShowOnboarding(true)}
        >
          Update Profile
        </button>
      </div>

      {/* Cards */}
      <ProfileSummary profile={{ ...profile, name: user?.name }} />
      <CurrentStage stage={stage} />
      <TodoList tasks={tasks} />

      {/* Onboarding / Update Modal */}
      {showOnboarding && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <OnboardingForm
            initialData={profile} 
            onClose={() => setShowOnboarding(false)}
            onComplete={(updatedProfile) => {
              setProfile(updatedProfile);
              setUser(prev => ({ ...prev, profileComplete: true }));
              setShowOnboarding(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
