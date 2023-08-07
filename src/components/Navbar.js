import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1024) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='/' className='navbar-logo mt-3' onClick={closeMobileMenu}>
            {/* <img src='../images/logo.png' alt="" /> */}АвтоЗам ХХК
            {/* <i class='fab fa-typo3' /> */}
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a
                href='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Бидний тухай
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/activity'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Үйл ажиллагаа
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/workdone'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Гүйцэтгэсэн ажил
              </a>
            </li>


            <li>
              <a
                href='/contact'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Холбоо барих
              </a>
            </li>
          </ul>
          <a href='/contact' className='text-white text-[15px] border border-white px-8 py-3 rounded-sm hover:text-[#2c234d] hover:bg-white transition-all hidden lg:block'> ХОЛБОГДОХ
          </a>

        </div>
      </nav >
    </>
  );
}

export default Navbar;
