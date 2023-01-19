import React, { useState } from "react";
import leftArrow from "./img/leftArrow.png";
import rightArrow from "./img/rightArrow.png";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerStyle = {
    width: "100%",
    height: "33.33vh",
    minHeight: "300px",
    maxHeight: "415px",
    margin: "0 auto",
  };

  const sliderStyle = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentIndex]})`,
  };

  const leftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "5%",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "5%",
    zIndex: 1,
    cursor: "pointer",
  };

  const slideIndexStyle = {
    position: "absolute",
    left: "50%",
    transform: "translate(0, -50%)",
    bottom: "5%",

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "142.6%",
    color: "#FFFFFF",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={containerStyle}>
      <div style={sliderStyle}>
        <img
          style={leftArrowStyle}
          src={leftArrow}
          onClick={goToPrevious}
          alt="flèche de gauche"
        ></img>
        <img style={rightArrowStyle} src={rightArrow} onClick={goToNext} alt="flèche de droite"></img>
        <div className="slide-index" style={slideIndexStyle}>
          {currentIndex}/{slides.length}
        </div>
        <div style={slideStyles}></div>
      </div>
    </div>
  );
};

export default Slider;
