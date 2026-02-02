import { useState } from "react";

export default function OnboardingStep2({ onNext, onBack }) {
  const [targetDegree, setTargetDegree] = useState("");
  const [field, setField] = useState("");
  const [intake, setIntake] = useState("");
  const [countries, setCountries] = useState([]);

  const countryOptions = ["USA", "UK", "Canada", "Germany", "Australia", "Other"];

  const toggleCountry = (country) => {
    setCountries((prev) =>
      prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country]
    );
  };

  const handleNext = () => {
    if (!targetDegree || !field || !intake || countries.length === 0) {
      alert("Please complete all required fields.");
      return;
    }
    onNext({ targetDegree, field, intake, countries });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Study Goals</h2>

      <div className="space-y-2">
        <select
          className="input py-3 px-4"
          value={targetDegree}
          onChange={(e) => setTargetDegree(e.target.value)}
        >
          <option value="">Select intended degree</option>
          <option value="Bachelor’s">Bachelor’s</option>
          <option value="Master’s">Master’s</option>
          <option value="MBA">MBA</option>
          <option value="PhD">PhD</option>
        </select>
      </div>

      <div className="space-y-2">
        <input
          className="input py-3 px-4"
          placeholder="Field of study (e.g., Data Science)"
          value={field}
          onChange={(e) => setField(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <select
          className="input py-3 px-4"
          value={intake}
          onChange={(e) => setIntake(e.target.value)}
        >
          <option value="">Select target intake</option>
          <option value="Fall 2026">Fall 2026</option>
          <option value="Spring 2027">Spring 2027</option>
          <option value="Fall 2027">Fall 2027</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Preferred Countries</p>
        <div className="flex flex-wrap gap-3 mt-2">
          {countryOptions.map((country) => (
            <button
              key={country}
              type="button"
              onClick={() => toggleCountry(country)}
              className={`px-4 py-2 rounded-full border text-sm ${
                countries.includes(country)
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {country}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button className="btn-secondary w-full py-3" onClick={onBack}>
          Back
        </button>
        <button className="btn-primary w-full py-3" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
