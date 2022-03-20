const initState = {
  todoLists: JSON.parse(localStorage.getItem("todoList")) || [],
  todoCompleted: JSON.parse(localStorage.getItem("todoListCompleted")) || [],
  textCurrent: "",
  mess: {
    type: "",
    msg: "",
  },
  theme: "DARK",
  update: {
    show: false,
    index: null,
  },
};

export const ReducerTodo = (state = initState, action) => {
  switch (action.type) {
    case "SET_TEXT_CURRENT": {
      return {
        ...state,
        textCurrent: action.payload,
      };
    }
    case "SET_UPDATE_TASK": {
      const { todoLists } = state;
      return {
        ...state,
        textCurrent: todoLists[action.payload.index],
        update: action.payload,
      };
    }
    case "COMMIT_UPDATE_TASK": {
      const {
        todoLists,
        update: { index },
        textCurrent,
      } = state;
      const cloneTodo = [...todoLists];
      cloneTodo[index] = textCurrent;
      localStorage.setItem("todoList", JSON.stringify(cloneTodo));
      return {
        ...state,
        todoLists: cloneTodo,
        textCurrent: "",
        update: {
          show: false,
          index: null,
        },
        mess: {
          type: "SUCCESS",
          msg: "Update task thành công",
        },
      };
    }
    case "SET_THEME": {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case "SET_MESS": {
      return {
        ...state,
        mess: action.payload,
      };
    }
    case "ADD_TODO": {
      const { textCurrent, todoLists } = state;
      if (textCurrent.trim().length === 0) {
        return {
          ...state,
          mess: {
            type: "ERROR",
            msg: "Task không được rỗng",
          },
        };
      }
      if (todoLists.includes(textCurrent.trim())) {
        return {
          ...state,
          mess: {
            type: "ERROR",
            msg: "Task này đã tồn tại",
          },
        };
      }
      localStorage.setItem(
        "todoList",
        JSON.stringify([...todoLists, textCurrent])
      );
      return {
        ...state,
        todoLists: [...todoLists, textCurrent],
        textCurrent: "",
        mess: {
          type: "SUCCESS",
          msg: "Thêm task thành công",
        },
      };
    }
    case "ADD_TODO_COMPLETED": {
      const { todoLists, todoCompleted } = state;
      localStorage.setItem(
        "todoListCompleted",
        JSON.stringify([...todoCompleted, todoLists[action.payload]])
      );
      return {
        ...state,
        todoCompleted: [...todoCompleted, todoLists[action.payload]],
      };
    }
    case "DELETE_TASK": {
      const { todoLists } = state;
      const cloneTodo = [...todoLists];
      cloneTodo.splice(action.payload, 1);
      localStorage.setItem("todoList", JSON.stringify(cloneTodo));
      return {
        ...state,
        todoLists: cloneTodo,
      };
    }
    case "DELETE_TASK_COMPLETED": {
      const { todoCompleted } = state;
      const cloneTodo = [...todoCompleted];
      cloneTodo.splice(action.payload, 1);
      localStorage.setItem("todoListCompleted", JSON.stringify(cloneTodo));
      return {
        ...state,
        todoCompleted: cloneTodo,
      };
    }
    default: {
      return { ...state };
    }
  }
};
