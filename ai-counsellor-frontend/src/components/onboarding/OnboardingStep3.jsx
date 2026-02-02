import { useState } from "react";

export default function OnboardingStep3({ onSubmit, onBack }) {
  const [budgetRange, setBudgetRange] = useState("");
  const [fundingPlan, setFundingPlan] = useState("");
  const [englishTestStatus, setEnglishTestStatus] = useState("");
  const [greGmatStatus, setGreGmatStatus] = useState("");
  const [sopStatus, setSopStatus] = useState("");

  const handleSubmit = () => {
    if (!budgetRange || !fundingPlan || !englishTestStatus || !sopStatus) {
      alert("Please complete all required fields.");
      return;
    }
    onSubmit({ budgetRange, fundingPlan, englishTestStatus, greGmatStatus, sopStatus });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Budget & Readiness</h2>

      <div className="space-y-2">
        <select
          className="input py-3 px-4"
          value={budgetRange}
          onChange={(e) => setBudgetRange(e.target.value)}
        >
          <option value="">Select annual budget</option>
          <option value="Under $15,000">Under $15,000</option>
          <option value="$15,000 – $25,000">$15,000 – $25,000</option>
          <option value="$25,000 – $40,000">$25,000 – $40,000</option>
          <option value="Above $40,000">Above $40,000</option>
        </select>
      </div>

      <div className="space-y-2">
        <select
          className="input py-3 px-4"
          value={fundingPlan}
          onChange={(e) => setFundingPlan(e.target.value)}
        >
          <option value="">How will you fund your education?</option>
          <option value="Self-funded">Self-funded</option>
          <option value="Scholarship-dependent">Scholarship-dependent</option>
          <option value="Loan-dependent">Loan-dependent</option>
        </select>
      </div>

      <div className="space-y-2">
        <select
          className="input py-3 px-4"
          value={englishTestStatus}
          onChange={(e) => setEnglishTestStatus(e.target.value)}
        >
          <option value="">English proficiency test status</option>
          <option value="Not started">Not started</option>
          <option value="IELTS – Booked">IELTS – Booked</option>
          <option value="IELTS – Completed">IELTS – Completed</option>
          <option value="TOEFL – Completed">TOEFL – Completed</option>
        </select>
      </div>

      <div className="space-y-2">
        <select
          className="input py-3 px-4"
          value={greGmatStatus}
          onChange={(e) => setGreGmatStatus(e.target.value)}
        >
          <option value="">GRE/GMAT status (if required)</option>
          <option value="Not required">Not required</option>
          <option value="Not started">Not started</option>
          <option value="Booked">Booked</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="space-y-2">
        <select
          className="input py-3 px-4"
          value={sopStatus}
          onChange={(e) => setSopStatus(e.target.value)}
        >
          <option value="">SOP status</option>
          <option value="Not started">Not started</option>
          <option value="Draft in progress">Draft in progress</option>
          <option value="Ready">Ready</option>
        </select>
      </div>

      <div className="flex gap-4 pt-4">
        <button className="btn-secondary w-full py-3" onClick={onBack}>
          Back
        </button>
        <button className="btn-primary w-full py-3" onClick={handleSubmit}>
          Finish
        </button>
      </div>
    </div>
  );
}
