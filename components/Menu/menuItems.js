import React from "react";
import SignageHeading from "../DigitalSignages/signageHeading";
import MenuCard from "./menuCard";

const MenuItems = ({ menu, image }) => {
  // const maxItemsPerCategory = noImages ? 4 : 5;
  // const numberOfCategories = noImages ? 10 : 4;
  console.log(menu);
  const categoiresToDisplay = menu.categories.slice(0, 2);
  // const categoriesToDisplaySecondRow = menu.categories.slice(5, 7);

  // const columnWidth = categoiresToDisplay.length > 3 ? 3 : 4;
  return (
    <>
      <div className="signage signage-horizontal signage-product">
        <SignageHeading className="signage-vertical-heading" />
        <div className="signage-product-image">
          <img src={image} alt="Digital Signage Product" />
          {/* <Image
          src={images.full}
          alt="Digital Signage Product"
          layout="responsive"
          width={2160}
          height={3840}
        /> */}
        </div>
        <div className="signage-product-content-container">
          <SignageHeading className="signage-horizontal-heading" />

          <div
            className="columns signage-content "
            style={{
              height: "100%",
              paddingLeft: "145px",
              paddingTop: "150px",
            }}
          >
            {categoiresToDisplay.map((category, k) => (
              <div
                key={k}
                className="column is-half"
                style={{ paddingRight: "195px" }}
              >
                <p className="category-title is-2">{category.name}</p>
                <div className="menu-category-items">
                  {category.items.slice(0, 6).map((item, key) => (
                    <div key={key} className="menu-card-info">
                      <p className="item-title">{item?.name || "/"}</p>
                      <p className="item-price">{item?.price || "/"}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <button className="button guestie-menu">
              <img
                src="/images/guestro-logo.svg"
                alt="guestro-logo"
                width={400}
                height={400}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
