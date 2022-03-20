import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskCompleted } from "../../Store/Actions";
import { Button } from "../Button";
import { Title } from "../Title";
import { TodoItem, TodoList } from "../TodoItem";

export default function TaskCompleted() {
  const { todoCompleted } = useSelector((state) => state);
  const dipatch = useDispatch();

  const handleDeleteTaskComplete = (index) => {
    dipatch(deleteTaskCompleted(index));
  };

  return (
    <>
      <Title>Task Completed</Title>
      <TodoList className="w-100">
        {todoCompleted.map((item, index) => {
          return (
            <TodoItem className="d-flex align-items-center justify-content-between">
              {item}{" "}
              <Button onClick={() => handleDeleteTaskComplete(index)}>
                <i class="fa-solid fa-trash-can"></i>
              </Button>
            </TodoItem>
          );
        })}
      </TodoList>
    </>
  );
}
