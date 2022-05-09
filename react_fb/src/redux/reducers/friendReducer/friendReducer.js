import * as types from "../../actions/friendAction/friendType";

const initialState = {
  friends: [],

  isLoading: true,
};
const friendReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_LOADING:
      state = { ...state, isLoading: payload };
      return state;
    case types.SET_FRIENDS:
      state = { ...state, friends: payload };
      return state;
    default:
      return state;
  }
};
export default friendReducer;
