import * as types from "./actionTypes";

const setUser = (data) => ({
  type: types.SET_USER,
  payload: data,
});

export const loginUser = (data) => (dispatch) => {
  dispatch(setUser(data));
};
