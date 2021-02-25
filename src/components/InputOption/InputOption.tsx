import React from "react";
import "./InputOption.css";

type InputType = {
  Icon: any;
  title: string;
  color: string;
};

const InputOption: React.FC<InputType> = ({ Icon, title, color }) => {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;
