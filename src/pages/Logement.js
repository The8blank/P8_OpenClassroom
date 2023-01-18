import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import data from "../database/data";
import Footer from "../components/Footer";

const Logement = () => {
  const { id } = useParams();
  const card = data.find((item) => item.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!card) {
      navigate("/404");
    }
  }, [card, navigate]);

  if (card) {
    return (
      <>
        <div className="slider">SLIDER</div>

        <div className="info-habitat">
          <div className="info-top">
            <h2 className="host-title">{card.title}</h2>
            <div className="host-info">
              <p className="host-name">{card.host.name}</p>
              <img
                className="host-pic"
                src={card.host.picture}
                alt="Photo du propriétaire"
              />
            </div>
          </div>
          <h3 className="info-loc">{card.location}</h3>
          <div className="tags-stars">
            <div className="tag-container">
              {card.tags.map((item) => (
                <div>tag</div>
              ))}
            </div>
            <div className="stars-container">
              {
                card.rating
              }
            </div>
          </div>
        </div>

        <Footer/>
      </>
    );
  }
};

export default Logement;
