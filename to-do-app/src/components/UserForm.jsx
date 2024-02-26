import { useState, useEffect } from "react";
import ShowTask from "./ShowTask";

const UserForm = () => {
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const TODO = "TODO";
  const DOING = "DOING";
  const DONE = "DONE";
  const [value, setValue] = useState(""); // tracking user input
  const [tasks, setTasks] = useState(initialTasks);
  const [updateItem, setUpdateItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (updateItem) {
        const obj = {
          title: value,
          id: updateItem.id,
          status: updateItem.status,
        };
        const updatedTasks = tasks.map((task) =>
          task.id === updateItem.id ? obj : task
        );
        setTasks(updatedTasks);
        setUpdateItem(null);
      } else {
        const obj = {
          title: value,
          status: TODO,
          id: Date.now(),
        };
        setTasks((prev) => [...prev, obj]);
      }
      setValue("");
    }
  };

  const editTask = (task) => {
    setUpdateItem(task);
    setValue(task.title);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <div className="input-container text-center mt-4">
        <input
          className="py-3 px-4 fs-3"
          type="text"
          placeholder="input your task"
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyDown}
        />
      </div>
      <ShowTask
        setTasks={setTasks}
        tasks={tasks}
        TODO={TODO}
        DOING={DOING}
        DONE={DONE}
        setValue={setValue}
        value={value}
        updateItem={updateItem}
        setUpdateItem={setUpdateItem}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </>
  );
};

export default UserForm;
