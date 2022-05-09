import React from "react";
import { Avatar } from "@mui/material";
import "./story.scss";
const Story = ({ avatar_story, image_story, name_story }) => {
  return (
    <div style={{ backgroundImage: `url(${image_story})` }} className="story">
      <Avatar src={avatar_story} className="avatarStory" />
      <h4 className="titleStory">{name_story}</h4>
    </div>
  );
};
export default Story;
