import './App.css';
import Header from './Component/header';
import Footer from './Component/Footer';
import {Todo} from './Component/Todo';
import Additem from './Component/Additem';
import Todos from './Component/Todos';
import React ,{useState} from 'react'

function App() {
    let inititem;
    if(localStorage.getItem('todos')===null){
        inititem=[];
    }
    else{
        inititem=JSON.parse(localStorage.getItem("todos"));
    }
    const additem =(title,desc) =>{
        console.log("Adding logic here",title, desc,typeof todos.length);
        // if(todos.length==0){
        //      id = 0;
        // }
        // else{
            let id=todos[todos.length-1].id+1;
        // }
        const myitem ={
            id:id,
            title:title,
            desc:desc,
        }
        setTodos([...todos,myitem]);
        localStorage.setItem('todos',JSON.stringify(todos))
        console.log('Added',myitem);
    }
    const onDelete =(todo) =>{
        console.log("Delete",todo);
        setTodos(todos.filter((e)=>{
           return e!==todo;

        }));
        localStorage.setItem('todos',JSON.stringify(todos));

    }
    //setTodos update the value
    const [todos,setTodos]=useState([

        // inititem
        {
            id:0,
            title:"trst",
            desc:"testdesc"
        }
    ])
  return (
      <>
    <Header title="Todos List" searchBar={false}/>
      <Additem additem={additem}/>
    <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>

      </>
  );
}

    export default App;
