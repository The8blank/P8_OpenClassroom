import React, { useState } from "react";
import arrowUp from "../assets/images/arrow_up.png";
import arrowDown from "../assets/images/arrow_down.png";

function Collapse  (props)  {

  const {data,size} = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={size}>
      <div className="collapse-bar" onClick={toggleCollapse}>
        <h2>{data.title}</h2>
        <img
          src={isOpen ? arrowUp : arrowDown}
          className="collapse-arrow"
          alt={isOpen ? "flèche pointant le haut" : "flèche pointant le bas"}
        />
      </div>
      {isOpen ? (
        <div className="collapse-container">
          <p className="collapse-text">
            {data.content}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Collapse;
