import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Task {
  title: string,
  description: string,
  complete: boolean
}

type TypeArray = {
 
}



const initialTasks: Task[] = [
  {
    title: "dishwashing",
    description: "Wash the dishes",
    complete: true,
  },
  {
    title: "laundry",
    description: "clean the clothes",
    complete: false,
  },
  {
    title: "cleaning",
    description: "wipe the counter",
    complete: true,
  },{
    title: "groceries",
    description: "buy some veggies",
    complete: true,
  },
]



const MapTaskToTaskComponent =(task: Task) =>  (
<div className={`${task.complete ? 'bg-green-300 border-green-300': 'bg-white'} rounded mx`}>
  <div>{task.title}</div>
  <div>{task.description}</div>
</div>
)

//function TaskComponent() 

function Tasklist() {
  return (
    <div>
      {initialTasks.map(MapTaskToTaskComponent)}
      </div>
  )
}

export default Tasklist