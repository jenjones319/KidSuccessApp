import React, { useState } from "react";
import Form from "./Form";
import TasksList from "./TasksList";
import Counter from "./Counter";

const defaultTask = [
  {
    title: "Take out the trash",
    difficulty: 1,
    complete: false,
    assigned: "Cael"
  },
  {
    title: "Make dinner",
    difficulty: 3,
    complete: true,
    assigned: "Mom"
  }
];

export default function Tasks(props) {
  const [tasks, setTasks] = useState(defaultTask);

  function saveTask(task) {
    setTasks(tasks.concat(task));
  }

  function deleteTask(indexToRemove) {
    setTasks(tasks.filter((task, idx) => idx !== indexToRemove));
  }

  return (
    <div>
      <div className="container">
        <h2>
          Star Counter ( <Counter /> )
        </h2>
      </div>
      <Form onSave={saveTask} />
      <TasksList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}
