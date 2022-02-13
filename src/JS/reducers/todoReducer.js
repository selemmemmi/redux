import {
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  STATUS_TASK,
} from "../constant/actionTypes";

const initialState = {
  tasks: [{ text: "Task number 1", id: Math.random(), status: false }],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    case REMOVE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter((e) => e.id !== action.payload),
      };
    }
    case EDIT_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((e) =>
          e.id === action.payload.id
            ? { ...e, text: action.payload.changes }
            : e
        ),
      };
    }
    case STATUS_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((e) =>
          e.id === action.payload ? { ...e, status: !e.status } : e
        ),
      };
    }
    default:
      return state;
  }
};
