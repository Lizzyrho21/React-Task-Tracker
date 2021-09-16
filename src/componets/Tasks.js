
// TODO: Look up 'state' for react 
// TODO: delete what is below. you are on 43.22 of the video!!
// State in REACT 
import Task from './Task'


const Tasks = ({ tasks, onDelete, onToggle }) =>{

 return (
      < >
      {
          tasks.map((tasks) => <Task key={tasks.id} task={tasks}
          onDelete={onDelete} onToggle={onToggle} />)
      }
      </>
    )
}

export default Tasks
