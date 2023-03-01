import './App.css';
import React, {useState, useEffect} from "react";
import {LeaveReview} from './Form';
import {Routes, Route, Link} from "react-router-dom"

function MovieList(props) {
    const remove = (title) => {
        props.setMovies(props.movies.filter((movie) => movie.title !== title));

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        let urlencoded = new URLSearchParams();
        urlencoded.append("title", title);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("/api/removeMovie", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
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
                  <img src={movie.image} style={{height:"275px"}} alt={movie.image} />
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
    fetch("/api/movies")
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