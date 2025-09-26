const TasksSectionCard = ({ task, handleResolveTask }) => {
  return (
    <div className="card w-full bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="md:text-xl font-bold"> {task.title} </h2>
        <div className="mt-6">
          <button
            onClick={() => handleResolveTask(task)}
            className="btn bg-green-600 btn-block text-white font-bold"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TasksSectionCard;
