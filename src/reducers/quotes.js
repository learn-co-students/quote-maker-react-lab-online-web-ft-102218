import uuid from 'uuid'

export default function reducer(state = [], action) {
  let quote;
  let newState;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
 
    case "REMOVE_QUOTE":
      return state.filter((quote) => quote.id != action.quoteId);

    case "UPVOTE_QUOTE":
      newState = [...state]
      quote = newState.find((quote) => quote.id == action.quoteId)
      quote.votes++
      return newState
 
    case "DOWNVOTE_QUOTE":
        newState = [...state]
        quote = newState.find((quote) => quote.id == action.quoteId)

        if(quote.votes > 0)
          quote.votes--
        else
          alert('Vote is 0')
        return newState
      
    default:
      return state;
  }
}
