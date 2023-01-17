import React, {useState, useEffect} from 'react';
import data from "../database/data";





const Card = () => {
    const [dataCard, setDataCard] = useState([]);

    useEffect(() => {
        setDataCard(data)
    }, [])

    return (
        
        <div className="card-container">
            {dataCard.map(item => (
            <div className='card' key={item.id}>
                <img className='card-img' src={item.cover} alt={item.title} />
                <h3 className='card-title'>{item.title}</h3>
            </div>
        ))}
        </div>
        
    );
};

export default Card;