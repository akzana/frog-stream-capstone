import React from 'react';
import { Link } from 'react-router-dom';
import FrogIcon from '../../assets/frog-svgrepo-com.svg';

export default function Header() {
  return (
    <div className='header'>
      <nav className="header__nav">
        <Link to="/"><img className='header__logo' src={FrogIcon} alt="Frog Stream Logo" /></Link>
        {/* <Link to="LogInPage">Log In</Link> */}
      </nav>
    </div>
  )
}
