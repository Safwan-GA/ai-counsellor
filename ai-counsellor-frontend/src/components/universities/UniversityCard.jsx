export default function UniversityCard({ uni, onShortlist, onLock, locked, isShortlisted }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow space-y-3">
      <h3 className="text-xl font-semibold">{uni.name}</h3>
      <p className="text-sm text-gray-600">{uni.program}</p>

      <div className="text-sm">
        <p><strong>Country:</strong> {uni.country}</p>
        <p><strong>Risk:</strong> {uni.riskLevel}</p>
        <p><strong>Tuition:</strong> ${uni.tuition}</p>
        <p><strong>Chance:</strong> {uni.acceptanceChance}%</p>
      </div>

      <div className="flex gap-3">
        <button
          className={`px-4 py-2 rounded-lg ${
            isShortlisted ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => onShortlist(uni._id)}
          disabled={isShortlisted}
        >
          {isShortlisted ? "Shortlisted ✓" : "Shortlist"}
        </button>

        <button
          className={`px-4 py-2 rounded-lg ${
            locked ? "bg-indigo-400 opacity-50 cursor-not-allowed" : "bg-indigo-600 text-white"
          }`}
          disabled={locked}
          onClick={() => onLock(uni._id)}
        >
          {locked ? "Locked" : "Lock"}
        </button>
      </div>
    </div>
  );
}
