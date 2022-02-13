import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/actions/actions";
import "./add.css";

const Add = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTask({ id: Math.random(), text: task, status: false }));
    setTask("");
  };
  return (
    <div className="addClass">
      <input
        className="newTask"
        type="text"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button
        className="addButton"
        onClick={() => {
          task ? handleAdd() : alert("error");
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default Add;
