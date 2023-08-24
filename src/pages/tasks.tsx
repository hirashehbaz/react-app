import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasksFromLocalStorage, setTaskInLocalStorage, Task } from "./utils";
import { useStyles } from "./styles";

const Tasks = ({ bulkDelete = false }: { bulkDelete?: boolean }) => {
  const navigate = useNavigate();
  const [tasksForDeletion, setTasksForDeletion] = useState<string[]>([]);
  const taskList: Task[] = getTasksFromLocalStorage();
  const stylingClasses = useStyles();

  const handleTaskCreation = () => navigate("/create-tasks");

  const handleBulkDelete = () => {
    const newList = taskList.filter(
      (task) => !tasksForDeletion.includes(task.id)
    );
    setTaskInLocalStorage(newList);
    navigate("/list-tasks");
  };

  return (
    <div>
      <div className={stylingClasses.buttonContainer}>
        <button className={stylingClasses.button} onClick={handleTaskCreation}>
          Create a Task
        </button>
        {bulkDelete ? (
          // this is true only if we're on /bulk-delete page
          <button className={stylingClasses.button} onClick={handleBulkDelete}>
            Delete selected tasks
          </button>
        ) : (
          !!taskList.length && (
            <button
              className={stylingClasses.button}
              onClick={() => navigate("/bulk-delete")}
            >
              Delete Tasks in bulk
            </button>
          )
        )}
      </div>
      {taskList.length ? (
        taskList.map((task) => (
          <div className={stylingClasses.Card}>
            {bulkDelete && (
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked)
                    setTasksForDeletion((prevState) => [...prevState, task.id]);
                  else {
                    // if uncheck, delete from the selected items list
                    setTasksForDeletion(
                      tasksForDeletion.filter((element) => element !== task.id)
                    );
                  }
                }}
              ></input>
            )}
            {task.name}
          </div>
        ))
      ) : (
        <>
          <div className="App">
            <h1>You have not made any tasks yet!</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Tasks;
