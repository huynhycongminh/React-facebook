import baseDb from "../../../data/index";
import * as types from "./postType";
import { toast } from "react-toastify";
const getPost = (data) => ({
  type: types.SET_POSTS,
  payload: data,
});

const setLoading = (data) => ({
  type: types.SET_LOADING,
  payload: data,
});

export const fetchPost = () => (dispatch) => {
  dispatch(setLoading(true));

  baseDb
    .collection("Post")
    .orderBy("timestamp", "desc")
    .get()
    .then((posts) => {
      const allPost = [];
      posts.forEach((post) => {
        const data = { data: post.data(), postId: post.id };
        allPost.push(data);
      });
      dispatch(getPost(allPost));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
      toast.error(err);
    });
};
