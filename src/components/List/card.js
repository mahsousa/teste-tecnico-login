import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import "./card.css";


const Card = ({ item }) => {
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate('/detalhes/' + id);
  };

  const formattedDate = format(new Date(item.createdAt), 'dd/MM/yyyy');

  return (
    <div className="card ">
      <div className="row rounded-4">
        <div className="col-md-6 d-flex flex-row justify-content-center justify-content-md-center justify-content-lg-start">
          <img src={item.avatar} alt='avatar' />
        </div>
        <div className="col-md-6 d-flex">
          <div className="card-body">
            <h5 className="card-name d-flex flex-row justify-content-center justify-content-md-center justify-content-lg-start">
              {/* Passando a função handleDetails como referência para o evento onClick */}
              <a onClick={() => handleDetails(item.id)}>
                {item.name}
              </a>
            </h5>
            <p className="card-id d-flex flex-row justify-content-center justify-content-md-center justify-content-lg-start">ID: {item.id}</p>
            <p className="date d-flex flex-row justify-content-center justify-content-md-center justify-content-lg-start">{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
