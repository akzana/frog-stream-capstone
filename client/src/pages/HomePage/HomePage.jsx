import React, { useEffect, useState } from 'react';
import "./HomePage.scss";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";


export default function HomePage() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { userId } = useParams();

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(`${baseUrl}/users`);
      setUsers(response.data);
      
    } catch (err) {
      console.error("error fetching users: ", err);      
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div>
      <article className="featured-creator">
        <div className="featured-creator__container">
          <Link to="id">
            <img
              className="featured-creator__img"
              src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
              alt="creator" /></Link>
        </div>
      </article>
    </div>
  )
}
