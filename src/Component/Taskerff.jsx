import React from 'react'

export default function Taskerff() {
  return (
    <div>
      import React, { useEffect, useState } from "react";

import TaskInputForm from "./TaskInputFrom";
import TaskRow from './TaskRow.jsx'


export default function Tasker() {
  const [task, setTask] = useState([
    { id: 1, task: "test task", isFavorite: false },
    { id: 2, task: "test task", isFavorite: false },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const localDbData = localStorage.getItem("taskData");
    if (localDbData) {
      setTask(JSON.parse(localDbData));
    }
  }, []);

  const saveTolocalDb = (task) => {
    console.log(task);
    localStorage.clear();
    localStorage.setItem("taskData", JSON.stringify(task));
  };

  const submitHandler = () => {
    event.preventDefault();
    console.log(input);
    setTask((prev) => {
      return [
        ...prev,
        { id: crypto.randomUUID(), task: input, isFavorite: false },
      ];
    });
    //    saveTolocalDb(task)
    //    setInput("")
  };

  const deleteHandler = (taskId) => {
    const filteredTask = task.filter((task) => {
      return task.id !== taskId;
    });
    setTask(filteredTask);
    saveTolocalDb(filteredTask);
  };

  const favoriteToggler = (taskId) => {
    const newTaskList = task.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isFavorite: !task.isFavorite,
        };
      } else {
        return task;
      }
    });
    saveTolocalDb(newTaskList);

    setTask(newTaskList);
  };

  return (
    <div className="text-white">
      <TaskInputForm
        input={input}
        setInput={setInput}
        submitHandler={submitHandler}
      />

      <div>
        <p>all tasks</p>
        {task.map((task) => (
         <TaskRow key={task.id} task={task}/>
        ))}
      </div>
    </div>
  );
}

    </div>
  )
}
