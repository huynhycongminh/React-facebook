import * as types from "../../actions/userAction/actionTypes";
const initialState = {
  loading: false,
  user: null,
  user_id: null,
};
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_USER:
      state = {
        ...state,
        loading: true,
        user: payload.user,
        user_id: payload.id,
      };
      return state;
    default:
      return state;
  }
};
export default userReducer;
