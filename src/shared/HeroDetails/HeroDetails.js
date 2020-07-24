import React from 'react';
import HorizontalBarChart from './../HorizontalBarChart';

import './HeroDetails.scss';

const HeroDetails = ({currentHero}) => {
    return (
        <div className="hero-details d-flex justify-content-start align-items-start">
            <div className="col-4">
                <div className="hero-details__img">
                    <img className="img-fluid" src={currentHero.images.md} alt="" />
                </div>
            </div>

            <div className="col-8">
            <div className="hero-details__content">
                <h3>{currentHero.name}</h3>

                <h5>Biography</h5>
                <p><span>Full Name - </span>{currentHero.biography.fullName} | {currentHero.biography.placeOfBirth} | {currentHero.biography.publisher}</p>
                
                <h5>Occupation</h5>
                <p>{currentHero.work.occupation}</p>

                <h5>Power Stats</h5>
                <HorizontalBarChart powerstats={currentHero.powerstats} />
            </div>
            </div>
        </div>
    )
}

export default HeroDetails;