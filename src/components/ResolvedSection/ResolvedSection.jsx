import ResolvedSectionCard from "../ResolvedSectionCard/ResolvedSectionCard";
import EmptyStateBox from "../EmptyStateBox/EmptyStateBox"; 

const ResolvedSection = ({ resolvedData }) => {
  return (
    <div className="mt-12">
      <p className="text-2xl md:text-4xl font-semibold">Resolved Task</p>
      
      {resolvedData && resolvedData.length > 0 ? (
        <div className="grid gap-y-3 mt-3 mb-4">
          {resolvedData.map((resolve) => (
            <ResolvedSectionCard key={resolve.id} resolve={resolve} />
          ))}
        </div>
      ) : (
        <div className="mt-3 mb-4">
          <EmptyStateBox message="No resolved tasks yet." />
        </div>
      )}
    </div>
  );
};

export default ResolvedSection;