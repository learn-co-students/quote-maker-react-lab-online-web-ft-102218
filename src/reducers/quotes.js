export default (
  state = [
    //{ id: 1, author: "Cernan", content: "This is a quote" },
    //{ id: 2, author: "Cernan", content: "This is another quote" }
  ],
  action
) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote);
    case "REMOVE_QUOTE":
      const newState = state.filter(quote => quote.id !== action.quoteId);
      console.log(newState);
      return newState;
    case "UPVOTE_QUOTE":
      let newVote = state.map(quote => {
        if (quote.id === action.quoteId) {
          return { ...quote, votes: ++quote.votes };
        } else {
          return quote;
        }
      });
      return newVote;
    case "DOWNVOTE_QUOTE":
      let downVote = state.map(quote => {
        if (quote.id === action.quoteId && quote.votes !== 0) {
          return { ...quote, votes: --quote.votes };
        } else {
          return quote;
        }
      });
      return downVote;

    default:
      return state;
  }
};
