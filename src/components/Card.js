import React from "react";
import { Link } from "react-router-dom";


const Card = ({ dataCard }) => {

  const item = dataCard;

  return (
    
      <Link to={`/logement/${item.id}`}>
        <div className="card" key={item.id}>
          <img className="card-img" src={item.cover} alt={item.title} />
          <h3 className="card-title">{item.title}</h3>
        </div>
      </Link>
    
  );
};

export default Card;
