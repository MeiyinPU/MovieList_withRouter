// https://axios-http.com/docs/intro


import axios from "axios";
import { useEffect } from "react";
const FetchExample = () => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

  const fetchMovies = async () => {
    try {
      //La requête à fonctionné
      const response = await axios.get(url, {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzA0ZTQzODI5NDlkNDgxMzQzODllMGMxZjBlNmMzOCIsInN1YiI6IjYwNTFmYTM2OTc2YTIzMDA1MzMwYWQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.97Tv686oNtvpks41yCg-Evfoe_Pg1lFEdPWWEI-R-sg",
        },
      });
      console.log(response);
    } catch (error) {
      //La requete à échoué
      console.log(error);
    } finally {
      //Que ça échoue ou pas, on veut lancer des trucs ici
      console.log("La requete est terminée");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <p>test</p>;
};

export default FetchExample;