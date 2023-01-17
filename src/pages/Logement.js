import { useParams,useNavigate } from "react-router-dom";
import data from "../database/data";
import { useEffect } from "react";

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
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </>
    );
  }
};

export default Logement;
