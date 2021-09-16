// import logo from './logo.svg';
// import './App.css';

import Header from "./componets/Header"; // we imported our header component into the react.js
import Tasks from "./componets/Tasks";
import AddTask from "./componets/AddTask";
import { useState, useEffect } from 'react'






//ROOT COMPONENT!
function App() {

  const [showAddTask, setShowAddTask] = useState (false)


  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      console.log(data)
    }
    fetchTasks()
  }, [])

   const [tasks, setTasks] = useState([]);

//add task
const addTask = (task) =>
{
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task }
  setTasks([...tasks, newTask])
}


// Delete task
const deleteTask = (id) =>{
 setTasks(tasks.filter((task) => task.id !== id))
}

//toggle reminder!
const toggleReminder = (id) =>
{
setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task))
}




  // make sure to put JS BEFORE return 
 
  // you can only return a SINGLE parent element!!
  
  return (
    <div className="container"> 
    {/* import our header  */}

    {/* about props  */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} /> 
     {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder} />
      : 'No Tasks to Show!'} 
    </div>
  );
  }



// TODO: VIDEO STOPPED AT 1:27:14
// TODO: DELETE TASKS FROM SERVER 


  export default App;





//{/* <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header> */