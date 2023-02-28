import React, {useRef} from "react";
import {Link} from "react-router-dom";

export function LeaveReview(props) {

    const movieImage = useRef();
    const movieTitle = useRef();
    const movieReleaseDate = useRef();
    const movieActors = useRef();
    const movieRating = useRef();

    const onChange = (event) => {
        event.preventDefault();
        var poster = document.getElementById("posters").value;
        var selection = document.getElementById("selection");
        if (poster === "template1.jpg") {
            selection.innerHTML = "<img height='275px' src='/images/template1.jpg' alt='template1'>";
        } else if (poster === "template2.jpg") {
            selection.innerHTML = "<img height='275px' src='/images/template2.jpg' alt='template2'>";
        } else {
            selection.innerHTML = "";
        }
    }

    // const submit = (event) => {
    //     event.preventDefault();
    //     const movieData = [];
    //     props.movies.forEach( movie => {
    //         movieData.push(movie);
    //     })
    //     const image = movieImage.current.value;
    //     const title = movieTitle.current.value;
    //     const releaseDate = movieReleaseDate.current.value;
    //     const actors = movieActors.current.value;
    //     const rating = movieRating.current.value;
    //
    //     movieData.push(
    //         {"title" : title,
    //         "releaseDate" : releaseDate,
    //         "actors" : actors,
    //         "rating" : rating,
    //         "image" : image}
    //     );
    //     props.setMovies(movieData);
    //
    //     movieImage.current.value = "";
    //     movieTitle.current.value = "";
    //     movieReleaseDate.current.value = "";
    //     movieActors.current.value = "";
    //     movieRating.current.value = "";
    //     document.getElementById("selection").innerHTML = "";
    // };

    return (
        <div class="wrapper">
            <>&emsp;&emsp;</>
            <Link to="/">Home</Link>
            <>&emsp;&emsp;</>
        <form method="post" action="/api/review" encType="multipart/form-data">
            <p>
                Leave a review here!
            </p>
            <label>Title:</label>
            <p>
                <input
                    name={"title"}
                    ref={movieTitle}
                    type="text"
                />
            </p>
            <label>Release Date:</label>
            <p>
                <input
                    name={"releaseDate"}
                    ref={movieReleaseDate}
                    type="text"
                />
            </p>
            <label>Actors:</label>
            <p>
                <input
                    name={"actors"}
                    ref={movieActors}
                    type="text"
                />
            </p>
            <label>Rating:</label>
            <p>
                <input
                    name={"rating"}
                    ref={movieRating}
                    type="text"
                />
            </p>
            <p>
                <label>Choose an image:</label>
                <br></br>
                <input type="file" name="image"/>
            </p>
            <div id="selection"></div>
            <button>Add</button>
        </form>
        </div>
    )
}