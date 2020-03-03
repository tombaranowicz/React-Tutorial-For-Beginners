import React from "react";
import Review from "./Review";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [], appId: "" };
  }
  // 333903271 - id of twitter app in AppStore

  async requestReviews() {
    let url =
      "http://itunes.apple.com/rss/customerreviews/page=" +
      1 +
      "/id=" +
      this.state.appId +
      "/sortby=mostrecent/json?cc=" +
      "us";

    console.log(url);

    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          let reviews = result.feed.entry;
          console.log(reviews);
          this.setState({ reviews });
        },
        error => {
          console.log(error);
        }
      );
  }

  render() {
    const { appId, reviews } = this.state;
    return (
      <div className="container">
        <div className="row p-3">
          <form
            className="w-100"
            onSubmit={e => {
              e.preventDefault();
              this.requestReviews();
            }}
          >
            <div className="form-group">
              <label htmlFor="appId">App ID</label>
              <input
                className="form-control"
                id="appId"
                value={appId}
                onChange={e => this.setState({ appId: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {!reviews.length ? (
            <div className="row p-3">
              <h3>No Reviews</h3>
            </div>
          ) : (
            reviews.map(review => {
              return <Review key={review.id.appId} appId={appId} {...review} />;
            })
          )}
        </div>
      </div>
    );
  }
}

export default Dashboard;
