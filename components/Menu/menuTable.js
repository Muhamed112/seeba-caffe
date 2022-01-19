import React from "react";
import MenuCard from "./menuCard";
import MenuItems from "./menuItems";

const MenuTable = ({ menu }) => {
  return (
    <div className="menu">
      <div className="menu-header">
        <div className="menu-header-logo">
          <img src="/images/logo.svg" alt="Logo" />
        </div>
      </div>
      <div className="menu-content">
        <MenuItems menu={menu} />
        <button className="button guestie-menu">G</button>
      </div>
      
    </div>
  );
};

export default MenuTable;
