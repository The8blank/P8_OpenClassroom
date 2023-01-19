import React from "react";
import Card from "../components/Card";
import dataCard from "../database/data";

const Home = () => {
  return (
    <div className="display-container">
      <div className="banner home-banner">
        <div className="banner-content">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>
      <div className="card-container">
        {dataCard.map((item) => (
          <Card dataCard={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
