import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from '../List/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from '../../services/UserService';
import { useParams } from "react-router-dom";

const userService = new UserService();

const Detail = () => {
  // Capturar o parâmetro "id" da rota
  const { id } = useParams();

  const [userByID, setUserByID] = useState(null);

  useEffect(() => {
    // Função para carregar o usuário pelo ID
    const loadUserByID = async () => {
      try {
        const data = await userService.getUserByID(id);
        setUserByID(data);
      } catch (error) {
        console.error(error);
      }
    };

    // Chamar a função para carregar o usuário somente uma vez ao montar o componente
    loadUserByID();
  }, [id]); // Adicionando "id" como dependência para que o efeito seja reexecutado quando o ID mudar

  return (
    <Container className="content-form d-flex justify-content-center p-5">
      { userByID 
        ? 
        <Card item={userByID} /> 
        : 
        <p>Carregando...</p>
      }
    </Container>
  );
};

export default Detail;
