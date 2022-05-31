import React, { useState } from "react";
import "../Mobile-menu/mobilemenu.scss";
const MobileMenu = () => {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <>
      {!show && <a onClick={handleClick}>MENU</a>}
      {show && (
        <ul className="mMenu">
          <li onClick={handleClick}>MENU</li>
          <li>Menadżer graczy</li>
          <li>Zgłoś błąd</li>
          <li>Home</li>
        </ul>
      )}
    </>
  );
};
export default MobileMenu;
