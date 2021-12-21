import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(true)

  const [tasks, setTasks] = useState([
    {
        text: 'hello',
        id: 1,
        reminder: false,
    },
    {
        text: 'goodbye',
        id: 2,
        reminder: true,
    },
    {
        text: 'goodmorning',
        id: 3,
        reminder: false,
    }])

    //Add Task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = { id, ...task }
      setTasks([...tasks, newTask])

    }


    // Delete task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }


    // Toggle reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    }

  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     
     {showAddTask && <AddTask onAdd={addTask}/>}

     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
    </div>
  )
}

export default App;
