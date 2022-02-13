import {
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  STATUS_TASK,
} from "../constant/actionTypes";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};
export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    payload: id,
  };
};
export const editTask = (id, changes) => {
  return {
    type: EDIT_TASK,
    payload: { id, changes },
  };
};
export const statusTask = (id) => {
  return {
    type: STATUS_TASK,
    payload: id,
  };
};
