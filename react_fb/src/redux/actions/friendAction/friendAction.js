import baseDb from "../../../data/index";
import * as types from "./friendType";
import { toast } from "react-toastify";

const getFriend = (data) => ({
  type: types.SET_FRIENDS,
  payload: data,
});

const setLoading = (data) => ({
  type: types.SET_LOADING,
  payload: data,
});
export const fetchFriend = () => (dispatch) => {
  dispatch(setLoading(true));

  baseDb
    .collection("Friend")
    .get()
    .then((friends) => {
      const allFriend = [];
      friends.forEach((friend) => {
        const data = { data: friend.data(), friendId: friend.id };
        allFriend.push(data);
      });
      dispatch(getFriend(allFriend));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
      toast.error(err);
    });
};
