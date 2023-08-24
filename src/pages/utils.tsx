export type Task = {
  name: string;
  id: string;
};

export const getTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem("Tasks");
  return tasks ? JSON.parse(tasks) : [];
};

export const setTaskInLocalStorage = (tasksList: Task[]) => {
  localStorage.setItem("Tasks", JSON.stringify(tasksList));
};
