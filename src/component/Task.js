import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, statusTask } from "../JS/actions/actions";
import SimpleModal from "./Modal";
import "./taskStyle.css";
import checkMark from "./icons8-check-mark-48.png";

const Task = ({ data: { text, status, id } }) => {
  const [change, setChange] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <div class="task">
        <div class="face face1">
          <div class="content">
            <h1>{text}</h1>
            <img src={checkMark} className={status && "done"} />
          </div>
        </div>
        <div class="face face2">
          <SimpleModal id={id} text={text} />
          <div>
            <button onClick={() => dispatch(removeTask(id))}>DELETE</button>
          </div>
          <div>
            {" "}
            <button onClick={() => dispatch(statusTask(id))}>
              {status ? "UNDONE" : "DONE"}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
