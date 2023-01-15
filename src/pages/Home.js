import React from "react";
import Card from "../components/Card";


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-container-img">
        <h2 className="home-text-img">Chez vous, partout et ailleurs</h2>
        <img
          className="home-img"
          src="./home_photo.jpg"
          alt="paysages de côtes rocailleuse en face de la mer avec des cèdres et séquoia"
        />
      </div>
      <div className="home-card-container">
      </div>
      <Card/>
    </div>
  );
};

export default Home;
<h1>yo sur home</h1>;
