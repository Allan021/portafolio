import React from "react";

const BtnHamburguer = ({ openMenu, setOpenMenu }) => {
  const handleClick = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  return (
    <button
      onClick={handleClick}
      className={` hamburger hamburger--vortex ${openMenu ? "is-active" : ""} `}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default BtnHamburguer;
