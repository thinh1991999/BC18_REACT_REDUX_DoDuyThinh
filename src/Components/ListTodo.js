import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../Store/Actions";

export default function ListTodo() {
  const { todoLists } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      {todoLists.map((item, index) => {
        return (
          <li
            key={index}
            className="list-group-item mb-3 d-flex justify-content-between"
          >
            {item}{" "}
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={() => dispatch(deleteTask(index))}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
