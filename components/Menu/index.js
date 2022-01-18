import React from "react";
import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import MenuTable from "./menuTable";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Menu = ({ menus }) => {
  const createMenusArray = () => {
    const newArray = [];

    menus.menuOne.forEach((menu) => {
      newArray.push(menu);
      newArray.push(menu);
    });

    /*menus.menuTwo.forEach((menu) => {
      newArray.push(menu);
      newArray.push(menu);
    }); */

    return newArray;
  };

  const allMenus = createMenusArray();

  // var allMenus = createMenusArray();
  // const menuImages = allMenus[0];
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={false}
      fillParent
      bullets={false}
      organicArrows={false}
    >
      {allMenus.map((menu, k) => (
        <>
          <MenuTable key={k} menu={menu} noImages={k % 2 === 1} />
        </>
      ))}
    </AutoplaySlider>
  );
};

export default Menu;
