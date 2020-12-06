import { INCREMENT, DECREMENT } from '../actions/types';

function reducer(state = 0, action) { // state = {} or [] or 0 ""

  switch (action.type) {

    case INCREMENT:
      return state + 1

    case DECREMENT:
      return state - 1

    default:
      return state;
  }
}

export default reducer