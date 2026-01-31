import { useState } from "react";
import OnboardingStep1 from "./OnboardingStep1";
import OnboardingStep2 from "./OnboardingStep2";
import OnboardingStep3 from "./OnboardingStep3";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";


export default function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const next = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const back = () => {
    setStep(step - 1);
  };

  const submit = async (data) => {
    const finalData = { ...formData, ...data, profileComplete: true };
    try {
      await axios.post("/profile", finalData);

      // Update user context
      setUser(prev => ({ ...prev, profileComplete: true }));

      navigate("/dashboard");
    } catch (err) {
      console.error("Onboarding failed:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow">
        {/* Progress Indicator */}
        <div className="flex justify-between mb-6 text-sm font-medium text-gray-600">
          <span className={step >= 1 ? "text-indigo-600" : ""}>1. Academics</span>
          <span className={step >= 2 ? "text-indigo-600" : ""}>2. Goals</span>
          <span className={step >= 3 ? "text-indigo-600" : ""}>3. Budget</span>
        </div>

        {step === 1 && <OnboardingStep1 onNext={next} />}
        {step === 2 && <OnboardingStep2 onNext={next} onBack={back} />}
        {step === 3 && <OnboardingStep3 onSubmit={submit} onBack={back} />}
      </div>
    </div>
  );
}
