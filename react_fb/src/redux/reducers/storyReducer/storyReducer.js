import * as types from "../../actions/storyAction/storyType";

const initialState = {
  stories: [],
  isLoading: true,
};
const storyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_LOADING:
      state = { ...state, isLoading: payload };
      return state;

    case types.SET_STORIES:
      state = { ...state, stories: payload };
      return state;
    default:
      return state;
  }
};
export default storyReducer;
