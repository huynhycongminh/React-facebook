import React from "react";
import "./header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchAdmin } from "../../../redux/actions/adminAction/adminAction";
const linkLogo =
  "https://pnggrid.com/wp-content/uploads/2021/05/Facebook-logo-2021-1024x1024.png";
const textHomePage = "trang chủ";
const textCreate = "Tạo";

const Header = () => {
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
    <div className="headers">
      <div className="headerLeft">
        <img className="logo" src={linkLogo} alt="logo" />
        <div className="headerSearch">
          <SearchIcon />
          <input placeholder="Tìm kiếm trên Facebook" className="searchInput" />
        </div>
      </div>
      <div className="headerRight">
        {myAdmins.map((adm,index) => (
          <div className="headerInfo" key={index}>
            <Avatar src={adm.data.image_user} className="avatarUser" />
            <h4 className="nameUser">{adm.data.name_user}</h4>
          </div>
        ))}

        <div className="linkHomePage">
          <a href="/" className="homePage">
            {textHomePage}
          </a>
        </div>
        <div className="createNew">
          <a href="/" className="create">
            {textCreate}
          </a>
          <ArrowDropDownIcon />
        </div>
        <IconButton className="menuIcon">
          <MenuIcon className="menu" />
        </IconButton>
        <IconButton>
          <PeopleAltIcon className="peopleHeader" />
        </IconButton>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
