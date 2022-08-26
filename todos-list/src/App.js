import './App.css';
import Header from './Component/header';
import Footer from './Component/Footer';
import {Todo} from './Component/Todo';
import Todos from './Component/Todos';


function App() {
    let todos=[
        {
            id:1,
            title:  "My First Todos",
            desc:  "Todos is working fine"

        },
         {
            id:2,
            title: "My second Todos",
            desc: "Todos is working fine"

        },
         {
            id:3,
            title: "My third Todos",
            desc: "Todos is working fine"

        },

    ]
  return (
      <>
    <Header title="Todos List" searchBar={false}/>
    <Todos todos={todos}/>
     <Footer/>

      </>
  );
}

    export default App;
