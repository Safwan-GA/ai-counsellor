import { useState } from "react";

export default function OnboardingStep1({ onNext }) {
  const [educationLevel, setEducationLevel] = useState("");
  const [major, setMajor] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [gpa, setGpa] = useState("");

  const handleNext = () => {
    if (!educationLevel || !major || !graduationYear) {
      alert("Please fill all required fields.");
      return;
    }
    onNext({ educationLevel, major, graduationYear, gpa });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Academic Background</h2>

      <div className="space-y-2">
        <select
          className="input py-3 px-4"
          value={educationLevel}
          onChange={(e) => setEducationLevel(e.target.value)}
        >
          <option value="">Select education level</option>
          <option value="High School">High School</option>
          <option value="Bachelor’s">Bachelor’s</option>
          <option value="Master’s">Master’s</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <input
          className="input py-3 px-4"
          placeholder="Degree / Major (e.g., B.Tech in CS)"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <input
          className="input py-3 px-4"
          type="number"
          placeholder="Graduation Year (e.g., 2025)"
          value={graduationYear}
          onChange={(e) => setGraduationYear(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <input
          className="input py-3 px-4"
          placeholder="GPA or Percentage (optional)"
          value={gpa}
          onChange={(e) => setGpa(e.target.value)}
        />
      </div>

      <button className="btn-primary w-full py-3 mt-4" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
