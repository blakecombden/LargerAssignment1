import './App.css';
import React, {useState, useEffect} from "react";
import {LeaveReview} from './Form';
import {Routes, Route, Link} from "react-router-dom"

function MovieList(props) {

  return (
      <div class="wrapper">
          <>&emsp;&emsp;&emsp;&emsp;</>
          <Link to="/">Home</Link>
          <>&emsp;&emsp;</>
          <Link to="/review">Review</Link>
      <ul>
        {
          props.movies.map(movie =>
              <ul>
                  <li>{movie.title}</li>
                  <li>{movie.releaseDate}</li>
                  <li>{movie.actors}</li>
                  <li>{movie.rating}</li>
                  <button>Remove</button>
              </ul>)
        }
      </ul>
      </div>
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

  return (
      <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/review" element={<LeaveReview movies={movies} setMovies={setMovies}/>} />
      </Routes>
  )
}
export default App;