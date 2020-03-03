import React, { useState, useEffect } from "react";

const Details = props => {
  const [review, setReview] = useState(null);

  useEffect(() => {
    requestReviews();
  }, []);

  async function requestReviews() {
    let url =
      "http://itunes.apple.com/rss/customerreviews/page=" +
      1 +
      "/id=" +
      props.appId +
      "/sortby=mostrecent/json?cc=" +
      "us";

    console.log(url);

    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          let reviews = result.feed.entry;
          let review = reviews.filter(
            review => review.id.label == props.reviewId
          )[0];
          setReview(review);
        },
        error => {
          console.log(error);
        }
      );
  }

  return (
    <div className="container">
      <div className="row p-3"></div>
      {review ? (
        <div>
          <h1>{review.title.label}</h1>
          <h2>{review.content.label}</h2>
          <h5>{`Author: ${review.author.name.label} | Version : ${review["im:version"].label}`}</h5>
        </div>
      ) : null}
    </div>
  );
};

export default Details;
