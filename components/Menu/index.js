import React from "react";
import "react-awesome-slider/dist/styles.css";
import MenuTable from "./menuTable";

const Menu = ({ menus }) => {
  const createMenusArray = () => {
    const newArray = [];

    menus.menuOne.forEach((menu) => {
      newArray.push(menu);
    });

    {
      /*menus.menuTwo.forEach((menu) => {
      newArray.push(menu);
      newArray.push(menu);
    }); */
    }

    return newArray;
  };

  var allMenus = createMenusArray();
  const menuImages = allMenus[0];
  return (
    <>
      {allMenus.map((menu, k) => (
        <>
          <MenuTable key={k} menu={menuImages} noImages={k % 2 === 1} />
        </>
      ))}
    </>
  );
};

export default Menu;
