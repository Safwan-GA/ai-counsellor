import { useState } from "react";
import OnboardingStep1 from "./OnboardingStep1";
import OnboardingStep2 from "./OnboardingStep2";
import OnboardingStep3 from "./OnboardingStep3";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function OnboardingForm({ onClose, onComplete, initialData }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialData || {});
  const navigate = useNavigate();

  const handleNext = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (step === 1) {
      if (onClose) onClose();
      else navigate("/dashboard");
    } else {
      setStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (finalStepData) => {
    const finalData = { ...formData, ...finalStepData, profileComplete: true };
    try {
      const res = await axios.post("/profile", finalData);
      console.log("Profile saved:", res.data);

      if (onComplete) onComplete(res.data);
      if (onClose) onClose();
      else navigate("/dashboard");
    } catch (err) {
      console.error("Profile save error:", err);
      alert(err.response?.data?.message || err.message || "Failed to save profile");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow">
        {/* Progress Indicator */}
        <div className="flex justify-between mb-6 text-sm font-medium text-gray-600">
          <span className={`px-3 py-1 rounded-full ${step === 1 ? "bg-indigo-100 text-indigo-700 font-semibold" : ""}`}>
            1. Academics
          </span>
          <span className={`px-3 py-1 rounded-full ${step === 2 ? "bg-indigo-100 text-indigo-700 font-semibold" : ""}`}>
            2. Goals
          </span>
          <span className={`px-3 py-1 rounded-full ${step === 3 ? "bg-indigo-100 text-indigo-700 font-semibold" : ""}`}>
            3. Budget
          </span>
        </div>


        {step === 1 && <OnboardingStep1 onNext={handleNext} onBack={handleBack} data={formData} />}
        {step === 2 && <OnboardingStep2 onNext={handleNext} onBack={handleBack} data={formData} />}
        {step === 3 && <OnboardingStep3 onSubmit={handleSubmit} onBack={handleBack} data={formData} />}
      </div>
    </div>
  );
}
