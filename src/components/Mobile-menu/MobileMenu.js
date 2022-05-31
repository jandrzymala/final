import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <li onClick={handleClick}>Zamknij</li>
          <li>
            <Link to="/adduser" onClick={handleClick}>
              Menadżer graczy
            </Link>
          </li>
          <li>
            <a href="mailto:jan.drzymala82@gmail.com" onClick={handleClick}>
              Zgłoś błąd
            </a>
          </li>
          <li>
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};
export default MobileMenu;
