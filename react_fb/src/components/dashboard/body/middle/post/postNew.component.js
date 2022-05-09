import React from "react";
import { Avatar } from "@mui/material";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../../../../redux/actions/postAction/postAction";
import "./post.scss";

const PostNew = () => {
  const { isLoading, posts, userId } = useSelector(
    (state) => ({
      isLoading: state.post.isLoading,
      posts: state.post.posts,
      userId: state.user.user_id,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchPost());
    }
  }, [isLoading, dispatch]);

  const myPosts = posts && posts.filter((pts) => pts.data.createdBy === userId);
  return (
    <div>
      {myPosts.map((pts, index) => (
        <div className="post" key={index}>
          <div className="postTop">
            <Avatar src={pts.data.profilePic} className="postAvatar" />
            <div className="postTopInfo">
              <h3>{pts.data.username}</h3>
              <p>{new Date(pts.data.timestamp?.toDate()).toUTCString()}</p>
            </div>
          </div>
          <div className="postBottom">
            <p>{pts.data.message}</p>
          </div>
          <div className="postImage">
            <img src={pts.data.image} alt="post" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default PostNew;
