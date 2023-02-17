import React, { useEffect, useState, useRef} from "react";

export function LeaveReview(props) {

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
        const title = movieTitle.current.value;
        const releaseDate = movieReleaseDate.current.value;
        const actors = movieActors.current.value;
        const rating = movieRating.current.value;

        movieData.push({"title" : title,
            "releaseDate" : releaseDate,
            "actors" : actors,
            "rating" : rating});
        console.log(movieData);
        props.setMovies(movieData);

        movieTitle.current.value = "";
        movieReleaseDate.current.value = "";
        movieActors.current.value = "";
        movieRating.current.value = "";
    };

    return (
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
    )
}