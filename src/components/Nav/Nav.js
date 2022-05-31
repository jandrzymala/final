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
        <ul>
          <li>
            <a href="/adduser">Menadżer graczy</a>
            <span onClick={handleClick}>Lista uczestników</span>
            {show && <UsersManager setShow={handleClick} />}
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
