import React, {useState, useEffect} from 'react';
import Card from '../../shared/Card';

import {Link} from 'react-router-dom';

export const SuperHeroList = () => {
    
    const [heroes, setHeroes] = useState([]);
    
    useEffect(() => {
        fetch("https://akabab.github.io/superhero-api/api/all.json")
        .then(response => response.json())
        .then(result => setHeroes(result))
        .catch(err => console.log(err.message));
    }, [])


    return (
        <div className="container">
            <div className="row">
                {heroes.map(hero => (
                    <div className="col-lg-3" key={hero.id}>
                        <Link to={`/heroes/${hero.id}`}>
                            <Card 
                                heroName={hero.name} 
                                heroRealName={hero.biography.fullName}
                                heroImg={hero.images.md}
                                heroPublisher={hero.biography.publisher}  />
                        </Link>
                    </div>
                ))}
            </div> 
        </div>
    )
}

export default SuperHeroList;