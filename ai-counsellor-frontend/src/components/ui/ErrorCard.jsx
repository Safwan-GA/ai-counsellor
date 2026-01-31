export default function ErrorCard({ error, onClose }) {
  if (!error) return null;

  return (
    <div className="fixed top-6 right-6 max-w-sm bg-red-50 border border-red-200 shadow-lg rounded-xl p-4 z-50">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-red-700 font-semibold mb-1">Something went wrong</h3>
          <p className="text-sm text-red-600">{error}</p>
        </div>
        <button
          onClick={onClose}
          className="text-red-500 hover:text-red-700 text-lg"
        >
          ×
        </button>
      </div>
    </div>
  );
}
