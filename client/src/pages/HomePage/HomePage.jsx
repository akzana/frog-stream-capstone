import React, { useEffect, useState } from 'react';
import "./HomePage.scss";
import { Link, useParams } from 'react-router-dom';
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
      console.log(users);
      // console.log(users[0].channelName);
      
      
    } catch (err) {
      console.error("error fetching users: ", err);      
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  if (users.length === 0) {return (null)};

  return (
    <GridLayout users={users}/>
  )
}
