import { useState } from 'react';
import ButtonAppBar from "./components/ButtonAppBar";
import TasksTable from "./components/TasksTable";
import "font-awesome/css/font-awesome.css";
import toastr from 'toastr';
import 'reactjs-toastr/lib/toast.css';


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Doctors Appointment',
      description: 'desc1',
      deadline: '02/23/22',
      priority: 'low',
    },
    {
      id: 2,
      title: 'title02',
      description: 'desc2',
      deadline: '02/25/22',
      priority: 'high',
    },
  ])

  // Add Task
  const addTask = (task) => {
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
      <ButtonAppBar />
      <TasksTable tasks={tasks} onDelete={deleteTask} /> {/*toggleEdit={toggleEdit} /> */}
    </div>
  );
}

export default App;
