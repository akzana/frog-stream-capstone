import React from 'react';
import "./HomePage.scss";
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <div>      
      <article className="featured-creator">
        <div className="featured-creator__container">
          <Link to="id">
          <img 
            className = "featured-creator__img" 
            src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68" 
            alt="creator" /></Link>
        </div>
      </article>
    </div>
  )
}
