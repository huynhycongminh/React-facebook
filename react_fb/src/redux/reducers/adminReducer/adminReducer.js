import * as types from "../../actions/adminAction/adminType";

const initialState = {
  admins: [],
  isLoading: true,
};
const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_LOADING:
      state = { ...state, isLoading: payload };
      return state;

    case types.SET_ADMIN:
      state = { ...state, admins: payload };
      return state;

    default:
      return state;
  }
};
export default adminReducer;
