import React, {useState} from "react";
import UsersList from "../UsersList/UsersList";
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
                <li><a onClick={handleClick}>Lista uczestników</a>{ show && (<UsersList />)}</li>
              </ul>
            </div> 
          </nav>
    )
}
export default Nav