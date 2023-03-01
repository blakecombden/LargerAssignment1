import React, {useRef} from "react";
import {Link} from "react-router-dom";

export function LeaveReview() {

    const movieTitle = useRef();
    const movieReleaseDate = useRef();
    const movieActors = useRef();
    const movieRating = useRef();

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
            <button>Add</button>
        </form>
        </div>
    )
}