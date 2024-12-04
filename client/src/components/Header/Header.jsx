import React from 'react';
import { Link } from 'react-router-dom';
import FrogIcon from '../../assets/frog-svgrepo-com.svg';
import './Header.scss';

export default function Header() {
  return (
    <div className='header'>
      <nav className="header__nav">
        <Link to="/" className='header__link-container'>
          <img className='header__logo' src={FrogIcon} alt="Frog Stream Logo" />
          <h1 className="header__title">Frog Stream</h1>
        </Link>
        {/* <Link to="LogInPage">Log In</Link> */}
      </nav>
    </div>
  )
}
