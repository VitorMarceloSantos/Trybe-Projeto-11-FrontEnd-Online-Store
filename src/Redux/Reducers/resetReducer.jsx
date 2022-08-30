export const RESET_STATE = 'RESET_STATE';

const INITIAL_STATE = {
  finish: false,
};

function resetReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RESET_STATE:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
}

export default resetReducer;
