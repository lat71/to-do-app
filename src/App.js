import { useState } from 'react';
import ButtonAppBar from "./components/ButtonAppBar";
import TasksTable from "./components/TasksTable";
import "font-awesome/css/font-awesome.css";
import toastr from 'toastr';
import 'reactjs-toastr/lib/toast.css';


function App() {

  const [tasks, setTasks] = useState([])

  // Add Task {title, description, deadline, priority}
  const addTask = (task) => {
    console.log("TASK ADDED IS: ", task)
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  
  // Delete Task
  const deleteTask = (id) => {
    // This filters out our tasks in Task based off their task.id and the id passed in
    setTasks(tasks.filter((task) => task.id !== id));
    toastr["success"]("Task succesfully deleted", "");
  }

  return (
    <div className="App">
      <ButtonAppBar tasks={tasks} onAdd={addTask}/>
      <TasksTable tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
