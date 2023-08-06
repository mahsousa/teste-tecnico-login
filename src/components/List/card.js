import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="row rounded-4">
        <div className="col-md-6 d-flex">
          <img src={item.avatar} alt='avatar' />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-name">{item.name}</h5>
            <p className="card-id">ID: {item.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
