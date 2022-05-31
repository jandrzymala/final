import React, { useState } from "react";
import { Link } from "react-router-dom";
import UsersManager from "../UsersManager/UsersManager";
import "./nav.scss";
const Nav = () => {
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    setShow(!show);
  };

  return (
    <nav>
      <div>
        <Link to="/">
          <span className="logo">QuizLeague</span>
        </Link>
      </div>
      <div>
        <ul className="menu">
          <li className="mobileMenu">
            <Link to="/menu">MENU</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/adduser">Menadżer graczy</Link>
            {/* <span onClick={handleClick}>Lista uczestników</span>
            {show && <UsersManager setShow={handleClick} />} */}
          </li>
          {/* <li>
            <Link to="/contact">Kontakt</Link>
          </li> */}
          <li>
            <a href="mailto:jan.drzymala82@gmail.com">Zgłoś błąd</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
