import React, {useState} from "react";
import UsersList from "../UsersList/UsersList";
import UsersManager from "../UsersManager/UsersManager";
import './nav.scss'
const Nav = () => {
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
         setShow(!show);
        }

    return (
        <nav>
            <div>
              <ul>
                <li><a onClick={handleClick}>Lista uczestników</a>{ show && (<UsersManager />)}</li>
              </ul>
            </div> 
          </nav>
    )
}
export default Nav