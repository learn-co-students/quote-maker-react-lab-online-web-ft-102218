import React from "react";

import { removeQuote } from "../actions/quotes";
import { connect } from "react-redux";

class QuoteCard extends React.Component {
  removeQuote = () => {
    console.log("remove");
    this.props.removeQuote(this.props.id);
  };

  render() {
    return (
      <div>
        <div className="card card-inverse card-success card-primary mb-3 text-center">
          <div className="card-block">
            <blockquote className="card-blockquote">
              <p>{this.props.content}</p>
              {/* <p>{Render Quote Content}</p> */}
              <footer>
                - author <cite title="Source Title">{this.props.author}</cite>
              </footer>
            </blockquote>
          </div>
          <div className="float-right">
            <div
              className="btn-group btn-group-sm"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" className="btn btn-primary">
                Upvote
              </button>
              <button type="button" className="btn btn-secondary">
                Downvote
              </button>
              <button
                onClick={this.removeQuote}
                type="button"
                className="btn btn-danger"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* <div>Votes: {Render Quote Votes}</div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { removeQuote }
)(QuoteCard);
