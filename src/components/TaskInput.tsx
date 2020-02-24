import React, { useState } from "react";
import { Task } from "./Types";

type Props = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasks: Task[];
};

const TaskInput: React.FC<Props> = ({ setTasks, tasks }) => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [count, setCount] = useState<number>(tasks.length + 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleSubmit = () => {
    setCount(count + 1);

    const newTask = {
      id: count,
      title: inputTitle,
      done: false
    };

    setTasks([newTask, ...tasks]);
    setInputTitle("");
  };

  return (
    <div>
      <div className="inputForm">
        <input
          type="text"
          className="text"
          value={inputTitle}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>追加</button>
      </div>
    </div>
  );
};

export default TaskInput;