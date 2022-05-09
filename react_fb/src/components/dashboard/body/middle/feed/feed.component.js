import React from "react";
import MessageSender from "../messageSender/messageSender.component";
import StoryList from "../story/storyList.component";
import PostNew from "../post/postNew.component";

import "./feed.scss";

const Feed = () => {
  return (
    <div className="feed">
      <div className="topFeed">
        <StoryList />
      </div>
      <div className="middleFeed">
        <MessageSender />
      </div>
      <div className="bottomFeed">
        <PostNew />
      </div>
    </div>
  );
};
export default Feed;
