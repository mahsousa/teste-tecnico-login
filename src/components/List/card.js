import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate('/detalhes/' + id); 
  };

  return (
    <div className="card">
      <div className="row rounded-4">
        <div className="col-md-6 d-flex">
          <img src={item.avatar} alt='avatar' />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-name">
              {/* Passando a função handleDetails como referência para o evento onClick */}
              <a onClick={() => handleDetails(item.id)}>
                {item.name}
              </a>
            </h5>
            <p className="card-id">ID: {item.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
