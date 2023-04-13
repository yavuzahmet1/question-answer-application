//import React from "react";
import Post from "../Post/Post";
import React, { useState, useEffect } from "react";
import "./Home.scss"


function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch("/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPostList(result)

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error !!!</div>;

    } else if (!isLoaded) {
        return <div>Loading... </div>;

    } else {
        return (
            <div className="container">
                Home !!

                {postList.map(post => (

                    <Post title={post.title} text={post.text}></Post>

                ))}
            </div>

        );
    }


}

export default Home;