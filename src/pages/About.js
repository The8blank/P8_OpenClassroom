import React, { useState, useEffect } from "react";
import Collapse from "../components/Collapse";
import aboutData from "../database/about_data";

const About = () => {
  const [dataCollapse, setDataCollapse] = useState([]);

  useEffect(() => {
    setDataCollapse(aboutData)
  }, [])

  return (
    <div className="display-container">
      <div className="banner about-banner">
      </div>
      {dataCollapse.map(item => (
        <Collapse data={item} size={"collapse-large"} key={item.id}/>
      ))}
    </div>
  );
};

export default About;
