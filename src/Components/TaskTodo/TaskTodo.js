import React from "react";
import { Button } from "../Button";
import { Title } from "../Title";
import { TodoItem, TodoList } from "../TodoItem";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodoCompleted,
  deleteTask,
  setUpdateTask,
} from "../../Store/Actions";

export default function TaskTodo() {
  const { todoLists, update } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddCompleted = (index) => {
    dispatch(addTodoCompleted(index));
    dispatch(deleteTask(index));
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleUpdateTask = (index) => {
    dispatch(
      setUpdateTask({
        show: true,
        index,
      })
    );
  };

  return (
    <>
      <Title>Task todo</Title>
      <TodoList className="w-100">
        {todoLists.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              className="d-flex align-items-center justify-content-between"
              style={{
                opacity: `${update.index === index ? 0.5 : ""}`,
              }}
            >
              <p style={{ flex: 1, textAlign: "start", margin: "unset" }}>
                {todo}
              </p>
              <Button onClick={() => handleDeleteTask(index)}>
                <i className="fa-solid fa-trash-can"></i>
              </Button>
              <Button
                className="ml-2 mr-2"
                onClick={() => handleUpdateTask(index)}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </Button>
              <Button onClick={() => handleAddCompleted(index)}>
                <i className="fa-solid fa-check"></i>
              </Button>
            </TodoItem>
          );
        })}
      </TodoList>
    </>
  );
}
