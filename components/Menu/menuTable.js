import React from "react";
import MenuCard from "./menuCard";
import MenuItems from "./menuItems";

const MenuTable = ({ menu, image }) => {
  return (
    <div className="menu">
      <MenuItems menu={menu} image={image} />
    </div>
  );
};

export default MenuTable;
