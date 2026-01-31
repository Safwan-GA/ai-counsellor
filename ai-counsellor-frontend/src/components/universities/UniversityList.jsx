import UniversityCard from "./UniversityCard";

export default function UniversityList({
  universities = [],
  lockedUniversity,
  shortlisted = [],
  onShortlist,
  onLock,
}) {
  if (!universities.length) {
    return <p className="text-gray-500">No universities found.</p>;
  }

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {universities.map((uni) => (
        <UniversityCard
          key={uni._id}
          uni={uni}
          locked={lockedUniversity === uni._id}
          isShortlisted={shortlisted.includes(uni._id)}
          onShortlist={onShortlist}
          onLock={onLock}
        />
      ))}
    </div>
  );
}
