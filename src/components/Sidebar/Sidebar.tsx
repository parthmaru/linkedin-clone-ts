import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import bioImage from "../../images/bio.jpeg";
import avatar from "../../images/avatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic: string) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={bioImage} alt="" />
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
          {user.email[0]}
        </Avatar>
        <h1>{user.displayName}</h1>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <div className="sidebar__statNumber">2,555</div>
        </div>
        <div className="sidebar__stat">
          <p>Views on Posts</p>
          <div className="sidebar__statNumber">2,555</div>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactts")}
        {recentItem("programming")}
        {recentItem("typescript")}
        {recentItem("uiux")}
        {recentItem("webdevelopment")}
      </div>
    </div>
  );
};

export default Sidebar;
