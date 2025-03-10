import "./App.css";
import { MyTasks } from "./MyTasks";
import { useEffect, useState } from "react";
import { getAllMyTasks, addTask, editTask, deleteTask } from "./FetchTasks";

function App() {
  const [tasks, setMyTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [editing, setEditing] = useState(false);
  const [taskId, setTaskId] = useState("");

  useEffect(() => {
    getAllMyTasks(setMyTasks);
  }, []);

  const updatingInInput = (_id, title) => {
    setEditing(true);
    setTitle(title);
    setTaskId(_id);
  };

  return (
    <div>
      <h1>To Do List</h1>

      <input
        type="text"
        placeholder="Type here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        disabled={!title}
        onClick={
          editing
            ? () => editTask(taskId, title, setTitle, setTask, setEditing)
            : (e) => addTask(title, setTitle, setTask)
        }
      >
        {editing ? "Edit" : "Add"}
      </button>

      {tasks.map((task) => (
        <MyTasks
          text={task.title}
          key={task._id}
          updatingInInput={() => updatingInInput(task._id, task.title)}
          deleteTask={() => deleteTask(task._id, setTask)}
        />
      ))}
    </div>
  );
}

export default App;
