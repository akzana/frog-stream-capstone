import React, { useEffect, useState } from 'react';
import "./HomePage.scss";
import { useParams } from 'react-router-dom';
import axios from "axios";
import GridLayout from '../../components/GridLayout/GridLayout.jsx';


export default function HomePage() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { userId } = useParams();

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(`${baseUrl}/users`);
      console.log(response);
      
      setUsers(response.data);
      
      
    } catch (err) {
      console.error("error fetching users: ", err);      
    }
  }

  const getUserById = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/users/${id}`)

    }catch (err) {
      console.error("error fetching user by ID: ", err);      
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  useEffect(
    () => {
        userId ? getUserById(userId) : getUsers();

        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [userId]);

  if (users.length === 0) {return (null)};

  return (
    <GridLayout users={users}/>
  )
}
