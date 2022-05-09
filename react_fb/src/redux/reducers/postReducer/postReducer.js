import * as types from "../../actions/postAction/postType";

const initialState = {
  posts: [],
  isLoading: true,
};
const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_LOADING:
      state = { ...state, isLoading: payload };
      return state;
    case types.SET_POSTS:
      state = { ...state, posts: payload };
      return state;

   
    default:
      return state;
  }
};
export default postReducer;
