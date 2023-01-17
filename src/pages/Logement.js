import { useParams,useNavigate } from "react-router-dom";
import { useEffect } from "react";
import data from "../database/data";

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
        {/* SLIDER */}
          <div className="slider">
            <h3>SLIDER</h3>
          </div>

          {/* Info Container */}
          <div className="info-container">

            {/* Info logement top titre, loc et tag host photo stars*/}
            <div className="info-logement-top">
              
              {/* Info logement 1 titre, loc et tag */}
              <div>
                <h2 className="logement-title">{card.title}</h2>
                <p className="logement-location">{card.location}</p>
                <div className="tag-container">
                  {card.tags.map(item => (
                    <div>tag</div>
                  ))}
                </div>
              </div>

              {/* Info logement host name,photo et stars */}
              <div className="info-host">
                <h3 className="host-name">{card.host.name}</h3>
                <div className="host-picture">photo</div>
                <div className="host-rating">
                  {card.rating}
                </div>
              </div>

              
            </div>

            {/* info logement bot collapse */}
            <div className="dropdown-container">
              En attente encore 
            </div>
          </div>
        </>
    );
  }
};

export default Logement;
