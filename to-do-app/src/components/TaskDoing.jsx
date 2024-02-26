const TaskDoing = ({
  handleOnDrop,
  handleDragOver,
  tasks,
  DOING,
  handleDrag,
  deleteTask,
  editTask,
}) => {
  return (
    <div
      className="doing"
      task-status={DOING}
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
    >
      <h2 className="doing-col text-center">Doing</h2>
      {/* rendering tasks list and only the tasks with DOING status in todo section */}
      {tasks.length > 0 &&
        tasks.map(
          (task) =>
            task.status === "DOING" && (
              <div
                className="task-item border border-1 border-dark shadow-lg fs-3"
                draggable
                key={task.id}
                onDrag={(e) => handleDrag(e, task)}
              >
                {task.title}
                <div className="btns">
                  <span className="btn" onClick={() => editTask(task)}>
                    ✎
                  </span>
                  <span className="btn" onClick={(e) => deleteTask(task)}>
                    🗑️
                  </span>
                </div>
              </div>
            )
        )}
    </div>
  );
};

export default TaskDoing;
