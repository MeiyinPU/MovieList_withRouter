import { useState, useEffect } from "react";
const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ name: "", age: 0 });
  const [count, setCount] = useState(0);

  // Je veux simuler un call API en lancant des opérations au bout de
  // 3 sec lorsque le composant est monté

  const simulateFetch = (count) => {
    setTimeout(() => {
      setLoading(false);
      //On vérifie que count n'est pas égale à 0
      if (count === 0) {
        setData({ name: "Toto", age: 32 });
      } else {
        setData({ name: "Toto", age: 32, count});
      }
    }, 3000);
  };



  useEffect(() => {
    setLoading(true);
    simulateFetch(count);
  }, [count]);

  // Faire en sorte de relancer ma méthode simulateFetch quand count est modifié.
  // Et d'afficher le chargement au lieu de la donné
  // et transformer data pour que data devienne {name:"Toto",age:32,count:{count}}

  return (
    <>
      {loading ? (
        <p>Chargement ...</p>
      ) : (
        <>
          <p>
            nom: {data.name}, age: {data.age}{data.count && `, count: ${count}`}
          </p>
          <button onClick={() => setCount(count + 1)}>ajouter 1</button>
        </>
      )}
    </>
  );
};

export default Loader;


