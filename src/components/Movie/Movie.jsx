
import {useParams} from 'react-router-dom'
import {useState} from 'react'

const Movie = () => {
  const params=useParams()
  const [movieItems, setMovieItems] = useState();
  // console.log(params)
  
    return <h1>{params.id}</h1>;
  };
  export default Movie;