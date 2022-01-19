import React from "react";
import MenuCard from "./menuCard";

const MenuItems = ({ menu }) => {
  // const maxItemsPerCategory = noImages ? 4 : 5;
  // const numberOfCategories = noImages ? 10 : 4;

  const categoiresToDisplay = menu.categories.slice(0, 4);
  const categoriesToDisplaySecondRow = menu.categories.slice(5, 7);

  // const columnWidth = categoiresToDisplay.length > 3 ? 3 : 4;

  return (
    <>
      <div className="menu-no-images">
        {categoiresToDisplay.map((category, k) => (
          <div key={k} className="menu-category">
            <p className="category-title is-2">{category.name}</p>
            <div className="menu-category-items">
              {category.items.slice(0, 4).map((item, key) => (
                <div key={key} className="menu-card-info">
                  <p className="item-title">{item?.name || "/"}</p>
                  <p className="item-price">{item?.price || "/"}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="menu-no-images">
        {categoriesToDisplaySecondRow.map((category, k) => (
          <div key={k} className="menu-category">
            <p className="category-title is-2">{category.name}</p>
            <div className="menu-category-items">
              {category.items.slice(0, 2).map((item, key) => (
                <div key={key} className="menu-card-info">
                  <p className="item-title">{item?.name || "/"}</p>
                  <p className="item-price">{item?.price || "/"}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuItems;
