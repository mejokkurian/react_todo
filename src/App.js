
import './App.css';
import {useState} from 'react';
// import Employee from './counter';

function App() {
  const [toDos, setToDos] = useState([])
  console.log(toDos)
  const [toDo, setToDo] = useState('')
  console.log(toDo)

  
 

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value = {toDo} onChange = {(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick = {()=>setToDos([...toDos,{id: Date.now,text:toDo,staus:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">

        {toDos.map((obj)=>{
          return(
        <div className="todo">
          <div className="left">
            <input onChange ={(e)=>{
              setToDos(toDos.filter(obj2 =>{
                if(obj2.id === obj.id){
                  obj.staus=e.target.checked
                }
                return obj
              }))

            }} value={obj.staus} type="checkbox" name="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick ={(e)=>{
              setToDos(toDos.filter(obj2 =>{
                if(obj2 === obj){
                 obj2 = e.target.null
                }
                return obj2
              }))

            }} className="fas fa-times" id="SDFG" ></i>
          </div>
        </div>)
        })}
      </div>
    </div>
  );
}

export default App;