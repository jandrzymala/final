import React, { useState } from "react";
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
            <span onClick={handleClick}>Lista uczestników</span>
            {show && <UsersManager setShow={handleClick}/>}
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
