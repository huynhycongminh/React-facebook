import baseDb from "../../../data/index";
import * as types from "./groupType";
import { toast } from "react-toastify";
const getGroup = (data) => ({
  type: types.SET_GROUPS,
  payload: data,
});
const setLoading = (data) => ({
  type: types.SET_LOADING,
  payload: data,
});
export const fetchGroup = () => (dispatch) => {
  dispatch(setLoading(true));

  baseDb
    .collection("Group")
    .get()
    .then((groups) => {
      const allGroup = [];
      groups.forEach((group) => {
        const data = { data: group.data(), groupId: group.id };
        allGroup.push(data);
      });
      dispatch(getGroup(allGroup));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
      toast.error(err);
    });
};
