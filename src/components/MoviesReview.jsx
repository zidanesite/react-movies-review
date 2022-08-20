
import React, { useState, useEffect } from "react";
import axios from "axios";

function MoviesReviews() {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
     axios
      .get("https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=0dogounw8tOyjmK0IfdqoyE33DfdMA00")
      .then((reviews) => {
       setReviews(reviews.data.results);
       console.log(reviews.data.results);
      })
      .catch((err) => {
       console.log(err);
      });
    }, []);
  return (
    
    <>
       <h1>posts</h1>
   {reviews.map((item) => {
    return (
      <div key={item.id} className>
       <h1>byline:{item.byline}</h1>
       <h1>critics_pick: {item.critics_pick}</h1>
       <h1>display_title:{item.display_title}</h1>
       <h1>headline:{item.headline}</h1>
       <img src={item.multimedia?.src}/>
      </div>
    );
   })}
  </>
  )
}

export default MoviesReviews