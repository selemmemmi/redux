import React, { useState } from "react";
import { useSelector } from "react-redux";
import Filter from "./Filter";
import Task from "./Task";

const TaskList = () => {
  const [filter, setFilter] = useState("all");
  const tasksListe = useSelector((state) => state.taskReducer.tasks);

  const taskListStyle = {
    margin: "5% 0",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };
  return (
    <div>
      <Filter setFilter={setFilter} />
      <div style={taskListStyle}>
        {filter === "all"
          ? tasksListe.map((e, i) => <Task data={e} key={i} />)
          : filter === "done"
          ? tasksListe
              .filter((e) => e.status)
              .map((e, i) => <Task data={e} key={i} />)
          : filter === "undone"
          ? tasksListe
              .filter((e) => !e.status)
              .map((e, i) => <Task data={e} key={i} />)
          : null}
      </div>
    </div>
  );
};

export default TaskList;
