import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import BtnHamburguer from "./BtnHamburguer";
import Menu from "./Menu";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log("Cambio");
    setOpenMenu(false);
  }, [location]);

  return (
    <header className="header">
      <a href="home" className="moro">
        AceWeb
      </a>

      <Menu
        classActive={`animate__animated ${
          openMenu ? "animate__fadeInLeft" : "animate__fadeOutLeft"
        }`}
      />

      <BtnHamburguer setOpenMenu={setOpenMenu} openMenu={openMenu} />
    </header>
  );
};
