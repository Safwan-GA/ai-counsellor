import { useState } from "react";

export default function OnboardingStep1({ onNext, onBack, data }) {
  const [educationLevel, setEducationLevel] = useState(data?.educationLevel || "");
  const [major, setMajor] = useState(data?.major || "");
  const [graduationYear, setGraduationYear] = useState(data?.graduationYear || "");
  const [gpa, setGpa] = useState(data?.gpa || "");

  const handleNext = () => {
    if (!educationLevel || !major || !graduationYear) {
      alert("Please fill all required fields.");
      return;
    }
    onNext({ educationLevel, major, graduationYear, gpa });
  };

  return (
    <div className="whitespace-pre-wrap flex flex-col space-y-4 w-full">
      <h2 className="text-xl font-semibold">Academic Background</h2>

      <select className="input" value={educationLevel} onChange={e => setEducationLevel(e.target.value)}>
        <option value="">Select education level</option>
        <option value="High School">High School</option>
        <option value="Bachelor’s">Bachelor’s</option>
        <option value="Master’s">Master’s</option>
        <option value="Other">Other</option>
      </select>

      <input
        className="input"
        placeholder="Degree / Major (e.g., B.Tech in CS)"
        value={major}
        onChange={e => setMajor(e.target.value)}
      />

      <input
        className="input"
        type="number"
        placeholder="Graduation Year (e.g., 2025)"
        value={graduationYear}
        onChange={e => setGraduationYear(e.target.value)}
      />

      <input
        className="input"
        placeholder="GPA or Percentage (optional)"
        value={gpa}
        onChange={e => setGpa(e.target.value)}
      />

      <div className="flex gap-3">
        {onBack && (
          <button className="btn-secondary w-full" onClick={onBack}>
            Cancel
          </button>
        )}
        <button className="btn-primary w-full" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
