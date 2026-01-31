export default function CurrentStage({ stage }) {
  return (
    <div className="bg-white p-5 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Current Stage</h3>
      <p className="text-blue-600 font-medium">{stage}</p>
    </div>
  );
}
