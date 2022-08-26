import './App.css';
import Header from './Component/header';
import Footer from './Component/Footer';
import {Todo} from './Component/Todo';
import Todos from './Component/Todos';


function App() {
    const onDelete =(todo) =>{
        console.log("Delete",todo);
    }
    let todos=[
        {
            id:1,
            title:  "My First Todos",
            desc:  "Todos is working fine for first"

        },
         {
            id:2,
            title: "My second Todos",
            desc: "Todos is working fine for second"

        },
         {
            id:3,
            title: "My third Todos",
            desc: "Todos is working fine for third"

        }

    ]
  return (
      <>
    <Header title="Todos List" searchBar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>

      </>
  );
}

    export default App;
