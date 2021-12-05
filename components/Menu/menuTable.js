import React from "react";
import MenuCard from "./menuCard";
import MenuItems from "./menuItems";

const MenuTable = ({ menu, noImages = false }) => {
  return (
    <div className="menu">
      <div className="menu-content">
        <MenuItems menu={menu} noImages={noImages} />
      </div>
      <div className="menu-footer">
        <img src="/images/logo.svg" alt="Logo" />
        <div className="menu-footer-decors">
          <img
            className="mb-3"
            src="/images/menu-decor-upper.png"
            alt="Decoration"
          />
          <img src="/images/menu-decor-lower.png" alt="Decoration" />
        </div>
        <div className="menu-footer-guestie">
          <p>
            Denna lösning är skapad
            <br />
            och drivs av Guestie.
          </p>
          <button className="button guestie">Guestie</button>
        </div>
      </div>
    </div>
  );
};

export default MenuTable;
