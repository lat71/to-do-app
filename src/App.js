import { useState } from 'react';
import ButtonAppBar from "./components/ButtonAppBar";
import TasksTable from "./components/TasksTable";
import "font-awesome/css/font-awesome.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Doctors Appointment',
      description: 'desc1',
      deadline: '02/23/22',
      priority: 'low',
      isComplete: false,
    },
    {
      id: 2,
      title: 'title02',
      description: 'desc2',
      deadline: '02/25/22',
      priority: 'high',
      isComplete: false,
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Toggle Edit Button
  const toggleEdit = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, isComplete: !task.isComplete} : task
        )
      )
  }

  return (
    <div className="App">
      <ButtonAppBar />
      <TasksTable tasks={tasks} toggleEdit={toggleEdit} /> 
    </div>
  );
}

export default App;
