import React, { useState } from "react";
import { nanoid } from "nanoid";
import { getTasksFromLocalStorage, setTaskInLocalStorage, Task } from "./utils";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const [taskName, setTaskName] = useState<string>("");
  const navigate = useNavigate();

  const submitTask = () => {
    let tasks: Task[] = getTasksFromLocalStorage();

    const newTask: Task = { name: taskName, id: nanoid() };
    tasks.push(newTask);

    setTaskInLocalStorage(tasks);

    //Redirecting to /list-tasks page
    navigate("/list-tasks");
  };

  return (
    <div className="App">
      <span>
        Enter task name
        <input
          style={{ marginLeft: "20px" }}
          type="text"
          placeholder="Task name..."
          value={taskName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setTaskName(event.target.value)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") submitTask();
          }}
        />
      </span>
    </div>
  );
};

export default CreateTask;
