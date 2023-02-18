import React, {useRef} from "react";
import {Link} from "react-router-dom";

export function LeaveReview(props) {

    const movieImage = useRef();
    const movieTitle = useRef();
    const movieReleaseDate = useRef();
    const movieActors = useRef();
    const movieRating = useRef();

    const submit = (event) => {
        event.preventDefault();
        const movieData = [];
        props.movies.forEach( movie => {
            movieData.push(movie);
        })
        const image = movieImage.current.value;
        const title = movieTitle.current.value;
        const releaseDate = movieReleaseDate.current.value;
        const actors = movieActors.current.value;
        const rating = movieRating.current.value;

        movieData.push({"title" : title,
            "releaseDate" : releaseDate,
            "actors" : actors,
            "rating" : rating,
        "imageFileName" : image});
        props.setMovies(movieData);

        movieTitle.current.value = "";
        movieReleaseDate.current.value = "";
        movieActors.current.value = "";
        movieRating.current.value = "";
    };

    return (
        <>
        <Link to="/">Home</Link>
        <form onSubmit={submit}>
            <input
                ref={movieTitle}
                type="text"
            />
            <input
                ref={movieReleaseDate}
                type="text"
            />
            <input
                ref={movieActors}
                type="text"
            />
            <input
                ref={movieRating}
                type="text"
            />
            <button>Add</button>
        </form>
        </>
    )
}