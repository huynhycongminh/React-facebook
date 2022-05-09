import React from "react";
import Item from "./friend.component";
import RedeemIcon from "@mui/icons-material/Redeem";
import SearchIcon from "@mui/icons-material/Search";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useEffect, useState } from "react";
import "./listFriends.scss";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchFriend } from "../../../../redux/actions/friendAction/friendAction";
const textReminder = "Lời nhắc";
const textBirthday = "Linh le and 2 other have birthdays today";
const ListFriends = () => {
  const { isLoading, friends, userId } = useSelector(
    (state) => ({
      isLoading: state.friend.isLoading,
      friends: state.friend.friends,
      userId: state.user.user_id,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchFriend());
    }
  }, [isLoading, dispatch]);
  const myFriends =
    friends && friends.filter((frd) => frd.data.createdBy === userId);
  return (
    <div className="listItems">
      <div className="listItemsTop">
        <div className="titleListItemsTop">
          <h3>{textReminder}</h3>
        </div>
        <div className="birthday">
          <RedeemIcon className="iconBirthday" />
          <h4>{textBirthday}</h4>
        </div>
      </div>
      <div className="listItemsBottom">
        <div className="searchBottom">
          <input placeholder="Người liên hệ" />
          <SearchIcon className="iconSearch" />
        </div>
        {myFriends.map((frd, index) => (
          <Item
            key={index}
            src={frd.data.image_friend}
            title={frd.data.name_friend}
            Icon={FiberManualRecordIcon}
          />
        ))}
      </div>
    </div>
  );
};
export default ListFriends;
