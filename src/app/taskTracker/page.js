"use client";
import { useState} from "react";

export default function taskTracker(){
    const [tasks, setTasks]=useState([
        {id: 1, text:'Learn Next.js'},
        {id: 2, text:'Build Task Tracker '},
    ]);
    const [task, setTask]=useState('');
    const createTask=()=>{
        if(task.trim()==='')return;//Error Handling 
        const newTaskObj={
            id:Date.now(),
            text:task,
        }

        setTasks((prev)=>[...prev,newTaskObj]); //Add the task 
        setTask(''); //Make input field empty 
        // console.log("This is created task.")
    };
    return(
        <div className="container mx-auto p-8 ">
            <h1 className=" text-2xl font-bold pb-4">Task Tracker</h1>
            <input className="border-2 border-gray-300 rounded-md p-2" type="text" placeholder="Add a task" onChange={(e)=>setTask(e.target.value)}
            />
            <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={createTask}>Add Task</button>
            <ul>
                {tasks.map((task)=>
                <li key={task.id}>
                    {task.id}.{task.text}</li>)}
            </ul>
        </div>
    )
}