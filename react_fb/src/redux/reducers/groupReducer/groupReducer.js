import * as types from "../../actions/groupAction/groupType";

const initialState = {
  groups: [],
  isLoading: true,
};
const groupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_LOADING:
      state = { ...state, isLoading: payload };
      return state;
    case types.SET_GROUPS:
      state = { ...state, groups: payload };
      return state;
  
   
    default:
      return state;
  }
};
export default groupReducer;
