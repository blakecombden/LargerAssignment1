import './App.css';
import React, {useState, useEffect} from "react";
import {LeaveReview} from './Form';
import {Routes, Route, Link} from "react-router-dom"

function MovieList(props) {

    const remove = (title) => {
        const movieData = props.movies.filter((movie) => movie.title !== title);
        props.setMovies(movieData);
    }

  return (
      <div class="wrapper">
          <>&emsp;&emsp;&emsp;&emsp;</>
          <Link to="/review">Review</Link>
      <ul>
        {
          props.movies.map(movie =>
              <ul>
                  <br></br>
                  <img src={'./images/' + movie.image} style={{height:"275px"}} alt="Movie Poster" />
                  <li>{movie.title}</li>
                  <li>Release Date: {movie.releaseDate}</li>
                  <li>Starring: {movie.actors}</li>
                  <li>Rating: {movie.rating}</li>
                  <button onClick={() => remove(movie.title)}>Remove</button>
              </ul>)
        }
      </ul>
      </div>
  )
}

function App() {

  let [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch("/movies")
        .then(response => response.json())
        .then(setMovies)
        .catch(e => console.log(e.message()))
  }, []);

  if (movies == null) {
    return<h1>Loading...</h1>
  }

  return (
      <Routes>
          <Route path="/" element={<MovieList movies={movies} setMovies={setMovies}/>} />
          <Route path="/review" element={<LeaveReview movies={movies} setMovies={setMovies}/>} />
      </Routes>
  )
}
export default App;