
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const title = "TODO APP";
  const [list, setlist] = useState([]);

  const AddedToDo = (task) => {
    setlist((prev) =>[...prev, task])
  }

  const removeIndexx = (index) => {
      list.splice(index,1);
    return AddedToDo();
  }

  return (
  <div className='font-sans container flex justify-center'>
    <div className='flex h-screen'>
      <div className='todo-card backdrop-blur-md bg-white/10 m-auto'>
      <Appname appTitle={title}/>
      <Taskadd addedtodo={AddedToDo}/>
      <ul className='list-none'>
      <Tasklist listoftasks={list} removeIndex1={removeIndexx} />
      </ul>
      </div>
    </div>
    </div>
  );
}

function Appname({appTitle}){
  return(
    <>
    <h1 className='text-2xl font-bold antialized leading-loose text-center'>{appTitle}</h1>
    </>

  );
}

function Taskadd({addedtodo}){
  const [task,setTask] = useState("");

  const handleTask = (event) =>{
    const taskValue= event.target.value;
    setTask((_)=>taskValue);
  }

  const pushTask = () =>{
    addedtodo(task);
    setTask('');
  }

  return(
    <div className='align-middle text-center'>
      <input className='leading-loose w-96 rounded-lg pl-2 pr-2 m-2' placeholder="Ex. Read a Book!" onChange={handleTask} value={task}/><br/>
      <button className='border-2 m-2 p-1 rounded-md hover:text-2xl font-bold align-middle ' onClick={pushTask}><strong>+</strong></button>
      
    </div>

  );
}

function Tasklist({listoftasks, removeIndex1}){
  const removeIndex = (index) => {
  return removeIndex1(index);
};
  return(
<>
{
  listoftasks.map((task, index) =>(
    <div  key={index}>
    <div className='grid grid-cols-6 gap-4 p-2 m-1 border-2 rounded-lg truncate'>
    <div className='col-span-4 align-middle truncate'>
    <li className='ml-2 font-medium'>{task}</li>
    </div>
    <div className='col-span-2 text-right truncate '>
    <button className='ml-1 mr-2 rounded-md hover:text-xl font-black' >☐</button> 
    <button className='ml-1 mr-2 rounded-md hover:text-xl font-black' onClick={sendindex => removeIndex(index)}>✕</button>
    </div>

    </div>

    </div>
))}  
</>  
  );
}

export default App;
