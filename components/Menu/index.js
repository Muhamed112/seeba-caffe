import React from "react";
import MenuTable from "./menuTable";

const Menu = ({ menus }) => {
  return (
    <>
      <MenuTable menu={menus.menuOne[0]} />
    </>
  );
};

export default Menu;
