import uuid from 'uuid'

export default function reducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
 
    case "REMOVE_QUOTE":
      idx = state.indexOf(action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "UPVOTE_QUOTE":
      return [...state, action.author];
 
    case "DOWNVOTE_QUOTE":
      idx = state.indexOf(action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];   
      
    default:
      return state;
  }
}
