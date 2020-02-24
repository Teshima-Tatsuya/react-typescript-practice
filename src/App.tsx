import { Task } from "./components/Types";
import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

const initialState: Task[] = [
  {
    id: 1,
    title: "title1",
    done: false
  },
  {
    id: 2,
    title: "title2",
    done: true
  }
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <div>
      <TaskInput tasks={tasks} setTasks={setTasks} />

      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
