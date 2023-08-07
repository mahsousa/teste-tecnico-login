import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import UserService from '../../services/UserService';
import "./card.css";

const userService = new UserService();

const MyComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Chama o método para listar usuários ao montar o componente
    userService.listUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const itemsPerPage = 12; // Number of cards to display per page

  return (
    <div className="card-wrapper">
      <CardList data={users} itemsPerPage={itemsPerPage} />
    </div>
  );
};

export default MyComponent;
