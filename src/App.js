import './App.css';
import {useState, useEffect} from "react";

function MovieList(props) {
  return (
      <ul>
        {
          props.fav_movies.map(movie =>
              <ul>
                <li>{movie.title}</li>
                <li>{movie.releaseDate}</li>
                <li>{movie.actors}</li>
                <li>{movie.rating}</li>
              </ul>)
        }
      </ul>
  )
}

function App() {

  let [movies, setMovies] = useState(null);

  useEffect(() => {
    // load movie data from json
    fetch("./movies.json")
        .then(response => response.json())
        .then(setMovies)
        .catch(e => console.log(e.message()))
  }, []);

  if (movies == null) {
    return<h1>Loading...</h1>
  }
  //console.log(movies);

  return (
      <>
        <MovieList fav_movies={(movies)}></MovieList>
      </>
  )
}
export default App;