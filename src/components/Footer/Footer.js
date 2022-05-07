import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
    return (
        <footer>
          <h3>Projekt w budowie</h3>
          <div className='social'>
            <a className='fb' href='#'><FontAwesomeIcon icon="fa-brands fa-facebook" />Facebook</a>
            <a className='insta' href='#'>Instagram</a>
          </div>
          
        </footer>
    )
}
export default Footer