import React from "react";
import grayStar from "../assets/images/gray_star.png";
import redStar from "../assets/images/red_star.png";

const StarRating = (props) => {
  const { stars } = props;
  const starList = [];
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      starList.push(<img src={redStar} key={i} alt="Star" className="stars" />);
    } else {
      starList.push(<img src={grayStar} key={i} alt="Star" className="stars" />);
    }
  }
  return <div>{starList}</div>;
};

export default StarRating;
