import React from "react";
import "./HeaderOption.css";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

type HeaderType = {
  Icon?: any;
  title: string;
  avatar?: boolean;
  onClick?: () => void;
};

const HeaderOption: React.FC<HeaderType> = ({
  Icon,
  title,
  avatar,
  onClick,
}) => {
  const user = useSelector(selectUser);

  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          onClick={onClick}
          src={user?.photoUrl}
          className="headerOption__icon"
        >
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
