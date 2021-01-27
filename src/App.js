import './App.css';
import React,{useState} from 'react';
import Quote from "./components/Quote"
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {

  let localStore = window.localStorage; 
  let listItemsFromLocalStorage = JSON.parse(localStore.getItem("todoLists")) || [];
  const [todoList, setTodoList] = useState(listItemsFromLocalStorage); 

  const addTask = newTask => {
    let todoMerge = [...todoList,newTask];
    setTodoList(todoMerge);    
    localStorage.setItem("todoLists", JSON.stringify(todoMerge));
  } 

  const deleteTask = todoIndex => {
    let todoListFromLocalStorage = JSON.parse(localStore.getItem("todoLists"));
    todoListFromLocalStorage.splice(todoIndex, 1);   
    setTodoList(todoListFromLocalStorage);
    localStorage.setItem("todoLists", JSON.stringify(todoListFromLocalStorage));         
  }

  const saveTask = (saveIndex, newVal) => {
    let todoListFromLocalStorage = JSON.parse(localStore.getItem("todoLists"));
        todoListFromLocalStorage[saveIndex] = newVal;
        setTodoList(todoListFromLocalStorage);
        localStorage.setItem("todoLists", JSON.stringify(todoListFromLocalStorage));       
  }

  const completeTask = tickIndex => {
        let todoList = JSON.parse(localStore.getItem("todoLists"));
        if(todoList[tickIndex].includes("<strike>")){
          todoList[tickIndex] = todoList[tickIndex].replace("<strike>","");
          todoList[tickIndex] = todoList[tickIndex].replace("</strike>","");
        }
        else{
          todoList[tickIndex] = "<strike>"+ todoList[tickIndex] +"</strike>";
        }
        setTodoList(todoList);
        localStorage.setItem("todoLists", JSON.stringify(todoList)); 
  }

  return (
    <div className="App">
        <Quote />
        <div className="container">
        <TodoForm addTask={addTask}/>
        <div className="list">
        <center>
          {todoList.map((item,index) => <TodoItem item={item} index={index} key={index} deleteTodo={deleteTask} saveTodo={saveTask} completeTodo={completeTask}/>)}
        </center>
        </div>
        </div>       
    </div>
  );
}

export default App;
