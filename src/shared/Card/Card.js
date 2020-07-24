import React from 'react';
import './Card.scss';

const Card = ({heroName, heroImg, heroRealName, heroPublisher}) => {
    return (
        <>
            <div className="hero-card">
                <div className="hero-card__img">
                    <img className="img-fluid" src={heroImg} alt="" />

                    <span className="hero-card__publisher">{heroPublisher}</span>
                </div>
                <div className="hero-card__content d-flex flex-column justify-content-between">
                    <h4>{heroName}</h4> 
                    <h6>{heroRealName}</h6>   
                </div>
            </div>
        </>
    )
}

export default Card;