import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import data from "../database/data";
import Footer from "../components/Footer";
import Tag from "../components/Tag";
import StarRating from "../components/StarRating";
import Collapse from "../components/Collapse";
import Slider from "../components/Slider";

const Logement = () => {
  const { id } = useParams();
  const card = data.find((item) => item.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!card) {
      navigate('/404')
    }
  }, [card, navigate, id]);

  if (card) {
    const dropdownData = [
      {
        id: "1",
        title: "Description",
        content: card.description,
      },
      {
        id: "2",
        title: "Équipments",
        content: card.equipments.join(", "),
      },
    ];
    
    return (
      <>
        <div className="logement-display">
          <Slider slides={card.pictures} />

          <div className="info-habitat">
            <div className="info-top">
              <h2 className="host-title">{card.title}</h2>
              <h3 className="info-loc">{card.location}</h3>
              <div className="tag-container">
                {card.tags.map((item) => (
                  <Tag dataTag={item} key={item} />
                ))}
              </div>
            </div>

            <div className="host-info">
              <div className="host">
                <p className="host-name">{card.host.name}</p>
                <img
                  className="host-pic"
                  src={card.host.picture}
                  alt="Le propriétaire"
                />
              </div>
              <div className="rating-stars">
                <StarRating stars={card.rating} />
              </div>
            </div>
          </div>

          <div className="dropdown-container">
            {dropdownData.map((item) => (
              <Collapse data={item} size={"collapse-medium"} key={item.id} />
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default Logement;
