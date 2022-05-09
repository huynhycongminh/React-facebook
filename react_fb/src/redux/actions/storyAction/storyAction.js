import baseDb from "../../../data/index";
import * as types from "./storyType";
import { toast } from "react-toastify";
const getStory = (data) => ({
  type: types.SET_STORIES,
  payload: data,
});
const setLoading = (data) => ({
  type: types.SET_LOADING,
  payload: data,
});
export const fetchStory = () => (dispatch) => {
  dispatch(setLoading(true));

  baseDb
    .collection("Story")
    .get()
    .then((stories) => {
      const allStory = [];
      stories.forEach((story) => {
        const data = { data: story.data(), storyId: story.id };
        allStory.push(data);
      });
      dispatch(getStory(allStory));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
      toast.error(err);
    });
};
