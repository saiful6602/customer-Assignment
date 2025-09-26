import TasksSectionCard from "../TasksSectionCard/TasksSectionCard";

const TasksSection = ({ taskSection, handleResolveTask }) => {
  return (
    <div>
      <p className="text-2xl md:text-4xl font-bold">Task Status</p>
      <div className="grid gap-y-5 md:mt-7">
        {taskSection.map((task) => (
          <TasksSectionCard
            task={task}
            key={task.id}
            handleResolveTask={handleResolveTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TasksSection;
