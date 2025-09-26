const ResolvedSectionCard = ({ resolve }) => {
  return (
    <div className="card w-full bg-green-100 card-xs shadow-sm">
      <div className="card-body py-4">
        <h2 className="card-title  text-xl font-semibold">{resolve.title}</h2>
      </div>
    </div>
  );
};

export default ResolvedSectionCard;
