import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import OnboardingForm from "../components/onboarding/OnboardingForm";

export default function OnboardingPage() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <OnboardingForm
        onClose={() => navigate("/dashboard")}
        onComplete={(profile) => {
          setUser(prev => ({ ...prev, profileComplete: true }));
          navigate("/dashboard")}}
      />
    </div>
  );
}
