/* import { useState } from "react";
import Example from "./components/Example";
import Exo from "./components/Exo";
import Loader from "./components/Loader"; */
//import FetchExample from './components/FetchExample'
import MoviesList from './components/MoviesList'
import "./App.css";

function App() {
  //const [count, setCount] = useState(1);
  return (
    <>
      {/* <Example count={count} setCount={setCount}/> */}
     <h3>Hello world></h3>
      {/* Mettre un bouton pour mettre à jour count */}
      {/* Dans le composant Exo, afficher un console.log pour indiquer que count vient d'être modifié */}
     {/*  <button onClick={() => setCount(count + 1)}>Ajouter 1 {count}</button>
      <Exo count={count}/> */}
      {/* <Loader/> */}

      {/* <FetchExample/> */}
      <MoviesList/>
    </>
  );
}

export default App;
