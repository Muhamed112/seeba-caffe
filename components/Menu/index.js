import React from "react";
import MenuTable from "./menuTable";

const Menu = ({ menus, image }) => {
  return (
    <>
      <MenuTable menu={menus.menuOne[0]} image={image.imagesOne[0].images[0].image} />
    </>
  );
};

export default Menu;
