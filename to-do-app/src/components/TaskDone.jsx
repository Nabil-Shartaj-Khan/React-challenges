const TaskDone = ({
  handleOnDrop,
  handleDragOver,
  tasks,
  DONE,
  handleDrag,
  deleteTask,
  editTask,
}) => {
  return (
    <div
      className="done"
      task-status={DONE}
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
    >
      <h2 className="done-col text-center">Done</h2>
      {/* rendering tasks list and only the tasks with DONE status in todo section */}
      {tasks.length > 0 &&
        tasks.map(
          (task) =>
            task.status === "DONE" && (
              <div
                className="task-done border border-1 border-dark shadow-lg fs-3"
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

export default TaskDone;
