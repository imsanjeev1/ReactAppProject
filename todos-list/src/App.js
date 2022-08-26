import './App.css';
import Header from './Component/header';
import Footer from './Component/Footer';
import {Todo} from './Component/Todo';
import Todos from './Component/Todos';


function App() {
  return (
      <>
    <Header title="Todos List" searchBar={false}/>
    <Footer/>
    <Todo/>
    <Todos/>
      </>
  );
}

    export default App;
