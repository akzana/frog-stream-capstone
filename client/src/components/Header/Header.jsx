import React from 'react';
import { Link } from 'react-router-dom';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';

export default function Header() {
  return (
    <div className='header'>
      <nav className="header__nav">
        <Link to="/"><HeadsetMicRoundedIcon/></Link>
        <Link to="LogInPage">Log In</Link>
      </nav>
    </div>
  )
}
