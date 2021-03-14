import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ExperienceDetails = ({experiences}) => {
    return (
        <div>
            <img className="img-fluid rounded" src={experiences.image} alt="exp"/>
            <h6>{experiences.location}</h6>
            <h5>{experiences.name}</h5>
            <p className="text-secondary small">${experiences.price} per person</p>
            <div className="exp d-flex align-items-center">
                <div className="stars">
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </div>
                <span className="mx-1">{experiences.reviews}</span>
            </div>    
        </div>
    );
};

export default ExperienceDetails;