import React from 'react';
import { Link } from "react-router-dom";

import './Footer.scss';
const Footer = () => {
    return (
        <footer>
          <p>Projekt: <a href='mailto:jan.drzymala82@gmail.com'>Jan Drzymała</a></p>
          <div>
          <ul className="footerLinks">
           <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/adduser">Menadżer graczy</Link>
              {/* <span onClick={handleClick}>Lista uczestników</span>
              {show && <UsersManager setShow={handleClick} />} */}
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
            <li>
              <a href="mailto:jan.drzymala82@gmail.com">Zgłoś błąd</a>
            </li>
          </ul>
        </div> 
          <div className='social'>
            <a className='fb' href='#'>Facebook</a>
            <a className='insta' href='#'>Instagram</a>
          </div>

        </footer>
    )
}
export default Footer