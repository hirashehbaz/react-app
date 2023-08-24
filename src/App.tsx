import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasks from "./pages/tasks";
import CreateTask from "./pages/createTask";
import { useStyles } from "./pages/styles";
import { useNavigate } from "react-router-dom";

const App = () => {

  const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("list-tasks");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <></>;
  };
  const stylingClasses = useStyles();

  return (
    <div className={stylingClasses.TaskContainer}>
      <Router>
        <Routes>
          <Route path="/list-tasks" element={<Tasks />} />
          <Route path="/create-tasks" element={<CreateTask />} />
          <Route path="/bulk-delete" element={<Tasks bulkDelete />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
