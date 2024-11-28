import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="LogInPage">Become a Creator</Link>
    </div>
  )
}
