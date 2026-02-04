import { useState } from "react";

export default function OnboardingStep3({ onSubmit, onBack, data }) {
  const [budgetRange, setBudgetRange] = useState(data?.budgetRange || "");
  const [fundingPlan, setFundingPlan] = useState(data?.fundingPlan || "");
  const [englishTestStatus, setEnglishTestStatus] = useState(data?.englishTestStatus || "");
  const [greGmatStatus, setGreGmatStatus] = useState(data?.greGmatStatus || "");
  const [sopStatus, setSopStatus] = useState(data?.sopStatus || "");

  const handleSubmit = () => {
    if (!budgetRange || !fundingPlan || !englishTestStatus || !sopStatus) {
      alert("Please complete all required fields.");
      return;
    }
    onSubmit({ budgetRange, fundingPlan, englishTestStatus, greGmatStatus, sopStatus });
  };

  return (
    <div className="whitespace-pre-wrap flex flex-col space-y-4 w-full">
      <h2 className="text-xl font-semibold">Budget & Readiness</h2>

      <select className="input" value={budgetRange} onChange={e => setBudgetRange(e.target.value)}>
        <option value="">Select annual budget</option>
        <option value="Under $15,000">Under $15,000</option>
        <option value="$15,000 – $25,000">$15,000 – $25,000</option>
        <option value="$25,000 – $40,000">$25,000 – $40,000</option>
        <option value="Above $40,000">Above $40,000</option>
      </select>

      <select className="input" value={fundingPlan} onChange={e => setFundingPlan(e.target.value)}>
        <option value="">How will you fund your education?</option>
        <option value="Self-funded">Self-funded</option>
        <option value="Scholarship-dependent">Scholarship-dependent</option>
        <option value="Loan-dependent">Loan-dependent</option>
      </select>

      <select className="input" value={englishTestStatus} onChange={e => setEnglishTestStatus(e.target.value)}>
        <option value="">English proficiency test status</option>
        <option value="Not started">Not started</option>
        <option value="IELTS – Booked">IELTS – Booked</option>
        <option value="IELTS – Completed">IELTS – Completed</option>
        <option value="TOEFL – Completed">TOEFL – Completed</option>
      </select>

      <select className="input" value={greGmatStatus} onChange={e => setGreGmatStatus(e.target.value)}>
        <option value="">GRE/GMAT status (if required)</option>
        <option value="Not required">Not required</option>
        <option value="Not started">Not started</option>
        <option value="Booked">Booked</option>
        <option value="Completed">Completed</option>
      </select>

      <select className="input" value={sopStatus} onChange={e => setSopStatus(e.target.value)}>
        <option value="">SOP status</option>
        <option value="Not started">Not started</option>
        <option value="Draft in progress">Draft in progress</option>
        <option value="Ready">Ready</option>
      </select>

      <div className="flex gap-3">
        <button className="btn-secondary w-full" onClick={onBack}>Back</button>
        <button className="btn-primary w-full" onClick={handleSubmit}>Finish</button>
      </div>
    </div>
  );
}
