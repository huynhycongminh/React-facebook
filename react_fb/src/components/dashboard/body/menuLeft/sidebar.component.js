import React from "react";
import SidebarRow from "./sidebarRow.component";
import ArticleIcon from "@mui/icons-material/Article";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FlagIcon from "@mui/icons-material/Flag";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import "./sidebar.scss";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAdmin } from "../../../../redux/actions/adminAction/adminAction";
import { fetchGroup } from "../../../../redux/actions/groupAction/groupAction";

const textShortcut = "Lối tắt";
const textSeeMore = "Xem thêm";
const textDiscover = "Khám phá";
const Sidebar = () => {
  const { isLoading, admins, userId } = useSelector(
    (state) => ({
      isLoading: state.admin.isLoading,
      admins: state.admin.admins,
      userId: state.user.user_id,
    }),
    shallowEqual
  );
  const { setLoading, groups } = useSelector(
    (state) => ({
      setLoading: state.group.isLoading,
      groups: state.group.groups,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchAdmin());
    }
  }, [isLoading, dispatch]);
  useEffect(() => {
    if (setLoading) {
      dispatch(fetchGroup());
    }
  }, [setLoading, dispatch]);
  const myGroups =
    groups && groups.filter((grp) => grp.data.createdBy === userId);
  const myAdmins =
    admins && admins.filter((adm) => adm.data.createdBy === userId);

  return (
    <div className="sidebar">
      <div className="sidebarTop">
        {myAdmins.map((adm, index) => (
          <SidebarRow
            key={index}
            src={adm.data.image_user}
            title={adm.data.name_user}
          />
        ))}

        <SidebarRow Icon={ArticleIcon} title="Bảng tin" />
        <SidebarRow Icon={OndemandVideoIcon} title="Videos" className="" />
      </div>
      <div className="sidebarMiddle">
        <h3 className="titleMiddle">{textShortcut}</h3>
        {myGroups.map((grp, index) => (
          <SidebarRow
            key={index}
            src={grp.data.image_group}
            title={grp.data.name_group}
          />
        ))}

        <div className="seeMore">
          <h3 className="more">{textSeeMore}</h3>
          <ArrowDropDownIcon className="arrowIconMore" />
        </div>
      </div>
      <div className="sidebarBottom">
        <h3 className="titleBottom">{textDiscover}</h3>
        <SidebarRow Icon={FlagIcon} title="Trang" />
        <SidebarRow Icon={PeopleAltIcon} title="Nhóm" />
      </div>
    </div>
  );
};
export default Sidebar;
