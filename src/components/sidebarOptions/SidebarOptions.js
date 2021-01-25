import React from "react";
import "./SidebarOptions.css";

const SidebarOptions = ({ active, Icon, text }) => {
  return (
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon />
        <h2>{text}</h2>
      </div>
  );
};

export default SidebarOptions;
