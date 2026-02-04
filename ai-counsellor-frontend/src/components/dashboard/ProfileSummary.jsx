export default function ProfileSummary({ profile, onUpdate }) {
  return (
    <div className="bg-white p-5 rounded shadow space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Profile Summary</h3>
        
      </div>

      <div>
        <h4 className="font-medium">Basic Info</h4>
        <p><strong>Name:</strong> {profile.name || "Not set"}</p>
      </div>

      <div>
        <h4 className="font-medium">Academic Background</h4>
        <p><strong>Education Level:</strong> {profile.educationLevel || "Not set"}</p>
        <p><strong>Major:</strong> {profile.major || "Not set"}</p>
        <p><strong>Graduation Year:</strong> {profile.graduationYear || "Not set"}</p>
        <p><strong>GPA:</strong> {profile.gpa || "Not set"}</p>
      </div>

      <div>
        <h4 className="font-medium">Study Goals</h4>
        <p><strong>Target Degree:</strong> {profile.targetDegree || "Not set"}</p>
        <p><strong>Field:</strong> {profile.field || "Not set"}</p>
        <p><strong>Intake:</strong> {profile.intake || "Not set"}</p>
        <p>
          <strong>Countries:</strong>{" "}
          {profile.countries?.length ? profile.countries.join(", ") : "Not set"}
        </p>
      </div>

      <div>
        <h4 className="font-medium">Budget & Readiness</h4>
        <p><strong>Budget Range:</strong> {profile.budgetRange || "Not set"}</p>
        <p><strong>Funding Plan:</strong> {profile.fundingPlan || "Not set"}</p>
        <p><strong>English Test:</strong> {profile.englishTestStatus || "Not set"}</p>
        <p><strong>GRE/GMAT:</strong> {profile.greGmatStatus || "Not set"}</p>
        <p><strong>SOP Status:</strong> {profile.sopStatus || "Not set"}</p>
      </div>

    </div>
  );
}
