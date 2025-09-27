import TasksSectionCard from "../TasksSectionCard/TasksSectionCard";
import EmptyStateBox from "../EmptyStateBox/EmptyStateBox"; 

const TasksSection = ({ taskSection, handleResolveTask }) => {
  return (
    <div>
      <p className="text-2xl md:text-4xl font-bold">Task Status</p>
      {taskSection && taskSection.length > 0 ? (
        <div className="grid gap-y-5 md:mt-7">
          {taskSection.map((task) => (
            <TasksSectionCard
              task={task}
              key={task.id}
              handleResolveTask={handleResolveTask}
            />
          ))}
        </div>
      ) : (
        <div className="md:mt-7">
          <EmptyStateBox message="Select a ticket to add to Task Status" />
        </div>
      )}
    </div>
  );
};

export default TasksSection;