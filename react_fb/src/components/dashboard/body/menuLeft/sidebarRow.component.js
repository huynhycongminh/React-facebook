import React from "react";
import { Avatar } from "@mui/material";
import "./sidebarRow.scss";
const SidebarRow = ({ src, Icon, title, image }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} className="avatarSidebarRow" />}
      {Icon && <Icon className="iconSidebarRow" />}
      {image && <img src={image} className="imageSidebarRow" />}
      <h4 className="titleSidebarRow"> {title} </h4>
    </div>
  );
};
export default SidebarRow;
