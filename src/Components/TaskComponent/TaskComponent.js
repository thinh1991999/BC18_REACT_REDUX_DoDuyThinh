import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  commitUpdateTask,
  setMess,
  setTextCurrent,
} from "../../Store/Actions";
import { Button } from "../Button";
import { TextField } from "../TextField";
import { Title } from "../Title";

export default function TaskComponent() {
  const dispatch = useDispatch();

  const {
    textCurrent,
    update: { show },
    mess: { type, msg },
  } = useSelector((state) => state);

  const handleCommitUpdate = () => {
    dispatch(commitUpdateTask());
  };

  return (
    <div className="">
      <Title
        style={{
          border: "unset",
          fontSize: `20px`,
        }}
      >
        Task name
      </Title>
      <div className="d-flex">
        <TextField
          className="flex-grow-1 "
          style={{ flex: 1 }}
          onChange={(e) => dispatch(setTextCurrent(e.target.value))}
          value={textCurrent}
          placeholder="Your task"
          onFocus={() =>
            dispatch(
              setMess({
                type: "",
                msg: "",
              })
            )
          }
        />

        {show ? (
          <Button className="ml-2" onClick={handleCommitUpdate}>
            Update Task
          </Button>
        ) : (
          <Button className="ml-2" onClick={() => dispatch(addTodo())}>
            Add Task
          </Button>
        )}
      </div>
      {msg.length > 0 ? (
        <p
          className="text-monospace mt-2"
          style={{ color: `${type === "ERROR" ? "red" : "blue"}` }}
        >
          {msg}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
