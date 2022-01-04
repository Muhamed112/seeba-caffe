import React from "react";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import MenuTable from "./menuTable";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Menu = ({ menus }) => {
  console.log(menus);

  const createMenusArray = () => {
    const newArray = [];

    menus.menuOne.forEach((menu) => {
      newArray.push(menu);
      newArray.push(menu);
    });

    {/*menus.menuTwo.forEach((menu) => {
      newArray.push(menu);
      newArray.push(menu);
    }); */}

    return newArray;
  };

  const allMenus = createMenusArray();

  console.log(allMenus);

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
