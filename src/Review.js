import React from "react";
import { Link } from "@reach/router";

const Review = props => {
  const { title, content, id, appId } = props;
  return (
    <div className="card mt-3 w-100">
      <Link to={`/details/${appId}/${id.label}`}>
        <div className="card-body">
          <h5 className="card-title">{title.label}</h5>
          <p className="card-text">{content.label}</p>
        </div>
      </Link>
    </div>
  );
};

export default Review;
