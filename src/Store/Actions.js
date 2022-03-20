export const setTextCurrent = (payload) => {
  return {
    type: "SET_TEXT_CURRENT",
    payload,
  };
};

export const setTheme = (payload) => {
  return {
    type: "SET_THEME",
    payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: "ADD_TODO",
    payload,
  };
};

export const addTodoCompleted = (payload) => {
  return {
    type: "ADD_TODO_COMPLETED",
    payload,
  };
};

export const deleteTask = (payload) => {
  return {
    type: "DELETE_TASK",
    payload,
  };
};

export const deleteTaskCompleted = (payload) => {
  return {
    type: "DELETE_TASK_COMPLETED",
    payload,
  };
};

export const setUpdateTask = (payload) => {
  return {
    type: "SET_UPDATE_TASK",
    payload,
  };
};

export const commitUpdateTask = (payload) => {
  return {
    type: "COMMIT_UPDATE_TASK",
    payload,
  };
};

export const setMess = (payload) => {
  return {
    type: "SET_MESS",
    payload,
  };
};
