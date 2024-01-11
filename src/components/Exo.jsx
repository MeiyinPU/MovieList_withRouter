/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Exo = ({ count }) => {
  useEffect(() => {
    console.log("Count vient d'être modifié");
  }, [count]);

  return <p>{count}</p>;
};

export default Exo;
