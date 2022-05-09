import React from "react";
import { Avatar } from "@mui/material";
import "./friend.scss";
const Friend = ({ src, title, Icon }) => {
  return (
    <div className="row item">
      <div className="col-2 leftItem">
        {src && <Avatar src={src} className="avatarItem" />}
      </div>
      <div className="col-8 middleItem">
        <h4 className="titleItem"> {title} </h4>
      </div>
      <div className="col-2 rightItem">
        {Icon && <Icon className="iconItem" />}
      </div>
    </div>
  );
};
export default Friend;
