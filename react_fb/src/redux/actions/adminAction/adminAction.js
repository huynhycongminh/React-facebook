import baseDb from "../../../data/index";
import * as types from "./adminType";
import { toast } from "react-toastify";
const getAdmin = (data) => ({
  type: types.SET_ADMIN,
  payload: data,
});
const setLoading = (data) => ({
  type: types.SET_LOADING,
  payload: data,
});
export const fetchAdmin = () => (dispatch) => {
  dispatch(setLoading(true));

  baseDb
    .collection("User")
    .get()
    .then((admins) => {
      const allAdmin = [];
      admins.forEach((admin) => {
        const data = { data: admin.data(), adminId: admin.id };
        allAdmin.push(data);
      });
      dispatch(getAdmin(allAdmin));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
      toast.error(err);
    });
};
