import { useState } from "react";
import TaskDoing from "./TaskDoing";
import TaskDone from "./TaskDone";

const ShowTask = ({
  setTasks,
  tasks,
  TODO,
  DOING,
  DONE,
  setValue,
  value,
  setUpdateItem,
  updateItem,
  editTask,
}) => {
  const [dragTask, setDragTask] = useState(null);

  const handleDrag = (e, task) => {
    //storing user task in drag task
    setDragTask(task);
    console.log("Dragging task:", task);
  };
  const handleDragAndDrop = (status) => {
    console.log("Dropping task with status:", status);
    let copyTask = [...tasks];
    copyTask = copyTask.map((item) => {
      if (dragTask.id === item.id) {
        item.status = status;
      }
      return item;
    });

    setTasks(copyTask);
    setDragTask(null);
  };

  const handleOnDrop = (e) => {
    const status = e.target.getAttribute("task-status");
    console.log("Dropping into status:", status);

    if (status === TODO) {
      handleDragAndDrop(TODO);
    } else if (status === DOING) {
      handleDragAndDrop(DOING);
    } else if (status === DONE) {
      handleDragAndDrop(DONE);
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    console.log("Drag over detected.");
  };

  const deleteTask = (item) => {
    let copyTask = [...tasks];
    copyTask = copyTask.filter((task) => task.id != item.id);
    setTasks(copyTask);
  };

  return (
    <div className="show-task pt-4 mt-4">
      <div
        className="to-do"
        task-status={TODO}
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      >
        <h2 className="todo-col text-center">To-do</h2>
        {/* rendering tasks list and only the tasks with TODO status in todo section */}
        {tasks.length > 0 &&
          tasks.map(
            (task) =>
              task.status === "TODO" && (
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
      {/* render doing task */}
      <TaskDoing
        tasks={tasks}
        DOING={DOING}
        handleOnDrop={handleOnDrop}
        handleDragOver={handleDragOver}
        handleDrag={handleDrag}
        deleteTask={deleteTask}
        editTask={editTask}
      />

      {/* render done task  */}
      <TaskDone
        tasks={tasks}
        DONE={DONE}
        handleOnDrop={handleOnDrop}
        handleDragOver={handleDragOver}
        handleDrag={handleDrag}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
};

export default ShowTask;
