export default function ProfileSummary({ profile }) {
  console.log(profile);
  
  return (
    <div className="bg-white p-5 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Profile Summary</h3>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Target Country:</strong> {profile.targetCountry}</p>
      <p><strong>Intended Intake:</strong> {profile.intake}</p>
    </div>
  );
}
