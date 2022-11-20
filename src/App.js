import ButtonAppBar from "./components/ButtonAppBar";
import TasksTable from "./components/TasksTable";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <h2>To Do App</h2>
      <TasksTable /> 
    </div>
  );
}

export default App;
