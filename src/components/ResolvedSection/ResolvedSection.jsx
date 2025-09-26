import ResolvedSectionCard from "../ResolvedSectionCard/ResolvedSectionCard";

const ResolvedSection = ({ resolvedData }) => {
  return (
    <div className="mt-12">
      <p className="text-2xl md:text-4xl font-semibold">Resolved Task</p>
      <div className="grid gap-y-3 mt-3 mb-4">
        {resolvedData.map((resolve) => (
          <ResolvedSectionCard key={resolve.id} resolve={resolve} />
        ))}
      </div>
    </div>
  );
};

export default ResolvedSection;
