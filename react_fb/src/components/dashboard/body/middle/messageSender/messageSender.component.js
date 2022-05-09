import React from "react";
import { Avatar } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MoodIcon from "@mui/icons-material/Mood";
import "./messageSender.scss";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAdmin } from "../../../../../redux/actions/adminAction/adminAction";

const textVideoAndImage = "Ảnh/Video";
const textTagFriends = "Gắn thẻ bạn bè";
const textEmoji = "Cảm xúc/Hoạt động";
const MessageSender = ({ image_user, name_user }) => {
  const { isLoading, admins, userId } = useSelector(
    (state) => ({
      isLoading: state.admin.isLoading,
      admins: state.admin.admins,
      userId: state.user.user_id,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchAdmin());
    }
  }, [isLoading, dispatch]);

  const myAdmins =
    admins && admins.filter((adm) => adm.data.createdBy === userId);
  return (
    <div className="messageSender">
      {myAdmins.map((adm,index) => (
        <div className="messageSenderTop" key={index}>
          <Avatar src={adm.data.image_user} />
          <form>
            <input
              className="messageSenderInput"
              placeholder={`${adm.data.name_user} bạn đang nghĩ gì thế?`}
            />
          </form>
        </div>
      ))}

      <div className="messageSenderBottom">
        <div className="messageSenderOption">
          <ImageIcon style={{ color: "violet" }} />
          <h3>{textVideoAndImage}</h3>
        </div>
        <div className="messageSenderOption">
          <GroupAddIcon style={{ color: "green" }} />
          <h3>{textTagFriends}</h3>
        </div>
        <div className="messageSenderOption">
          <MoodIcon style={{ color: "yellow" }} />
          <h3>{textEmoji}</h3>
        </div>
      </div>
    </div>
  );
};
export default MessageSender;
