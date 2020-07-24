import React, { useEffect, useState } from 'react'
import HeroDetails from '../../shared/HeroDetails';

import './SuperHeroDetails.scss'

const SuperHeroDetails = (props) => {
    const [hero, setHero] = useState({
        id: "",
        name: "",
        images: {},
        biography: "",
        powerstats: {},
        work: {}
    });

    useEffect(() => {
        const { match: { params } } = props;
        fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${params.heroId}.json`)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setHero(result);
        })
        .catch(err => console.log(err.message));
    }, [])

    return (
        <div className="container">
            <div className="card-details">
                <HeroDetails currentHero={hero} />
            </div>
        </div>
    )
}

export default SuperHeroDetails;