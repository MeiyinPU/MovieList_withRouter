/* eslint-disable react/prop-types */
import {useEffect,useState} from 'react'

const Example=({count,setCount})=>{
    const [count2, setCount2] = useState(10);
    const [data, setData] = useState();
    //Gestion de nos effets de bord:

    //1er cas, pas de second paramètre => déclenchement à chaque rendu ou rerender
    //(après déclenchement d'un setState)
    useEffect(() => {
      console.log(
        "Je me lance à chaque rendu et à chaque rerender",
        count,
        data,
      );
    });

    //2eme cas:
    //un tableau vide en second paramètre, pour déclencher l'effet de bord
    //uniquement quand le composant est monté
    useEffect(() => {
      console.log(
        "Je me lance uniquement quand le composant est initialement monté",
        count,
      );
      //Lancer un call API
      const apiData = { id: 5, name: "Toto" };
      //En lancant un setState, on déclenche en effet de b ord le premier useEffect qui n'a pas de tableau de dependance,
      //et qui donc se déclenche à chaque rerender
      setData(apiData);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //3eme cas:
    //On a un tableau de dépendance avec une variable dedans
    //=> ce useEffect va se déclencher à chaque fois que la variable en question est modifiée
    useEffect(() => {
      console.log("COUNT vient d'être modifié");
    }, [count]);

    return (
      <>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
      </>
    );
}

export default Example