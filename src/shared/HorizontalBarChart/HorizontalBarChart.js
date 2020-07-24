import React from 'react';
import './HorizontalBarChart.scss';

const HorizontalBarChart = ({powerstats}) => {
    return (
        <div className="horizontal-bar-chart">
            <div
                className="horizontal-bar-chart__row d-flex justify-content-between align-items-center">
                <div className="horizontal-bar-chart__info d-flex justify-content-between align-items-center">
                    <div className="horizontal-bar-chart__title">Intelligence</div>
                    <div className="horizontal-bar-chart__value">{powerstats.intelligence}</div>
                </div>
                <div className="horizontal-bar-chart__bar">
                    <span className="horizontal-bar-chart__bar-shadow"></span>
                    <span className="horizontal-bar-chart__bar-active"
                    style={{width: powerstats.intelligence + '%' }}>
                    </span>
                </div>
            </div>
            <div
                className="horizontal-bar-chart__row d-flex justify-content-between align-items-center">
                <div className="horizontal-bar-chart__info d-flex justify-content-between align-items-center">
                    <div className="horizontal-bar-chart__title">Strength</div>
                    <div className="horizontal-bar-chart__value">{powerstats.strength}</div>
                </div>
                <div className="horizontal-bar-chart__bar">
                    <span className="horizontal-bar-chart__bar-shadow"></span>
                    <span className="horizontal-bar-chart__bar-active"
                    style={{width: powerstats.strength + '%' }}>
                    </span>
                </div>
            </div>
            <div
                className="horizontal-bar-chart__row d-flex justify-content-between align-items-center">
                <div className="horizontal-bar-chart__info d-flex justify-content-between align-items-center">
                    <div className="horizontal-bar-chart__title">Speed</div>
                    <div className="horizontal-bar-chart__value">{powerstats.speed}</div>
                </div>
                <div className="horizontal-bar-chart__bar">
                    <span className="horizontal-bar-chart__bar-shadow"></span>
                    <span className="horizontal-bar-chart__bar-active"
                    style={{width: powerstats.speed + '%' }}>
                    </span>
                </div>
            </div>
            <div
                className="horizontal-bar-chart__row d-flex justify-content-between align-items-center">
                <div className="horizontal-bar-chart__info d-flex justify-content-between align-items-center">
                    <div className="horizontal-bar-chart__title">Durability</div>
                    <div className="horizontal-bar-chart__value">{powerstats.durability}</div>
                </div>
                <div className="horizontal-bar-chart__bar">
                    <span className="horizontal-bar-chart__bar-shadow"></span>
                    <span className="horizontal-bar-chart__bar-active"
                    style={{width: powerstats.durability + '%' }}>
                    </span>
                </div>
            </div>
            <div
                className="horizontal-bar-chart__row d-flex justify-content-between align-items-center">
                <div className="horizontal-bar-chart__info d-flex justify-content-between align-items-center">
                    <div className="horizontal-bar-chart__title">Power</div>
                    <div className="horizontal-bar-chart__value">{powerstats.power}</div>
                </div>
                <div className="horizontal-bar-chart__bar">
                    <span className="horizontal-bar-chart__bar-shadow"></span>
                    <span className="horizontal-bar-chart__bar-active"
                    style={{width: powerstats.power + '%' }}>
                    </span>
                </div>
            </div>
            <div
                className="horizontal-bar-chart__row d-flex justify-content-between align-items-center">
                <div className="horizontal-bar-chart__info d-flex justify-content-between align-items-center">
                    <div className="horizontal-bar-chart__title">combat</div>
                    <div className="horizontal-bar-chart__value">{powerstats.combat}</div>
                </div>
                <div className="horizontal-bar-chart__bar">
                    <span className="horizontal-bar-chart__bar-shadow"></span>
                    <span className="horizontal-bar-chart__bar-active"
                    style={{width: powerstats.combat + '%' }}>
                    </span>
                </div>
            </div>
        </div>
    )
}


export default HorizontalBarChart;



{/* <ul>
<li>{currentHero.powerstats.intelligence}</li>
<li>{currentHero.powerstats.strength}</li>
<li>{currentHero.powerstats.speed}</li>
<li>{currentHero.powerstats.durability}</li>
<li>{currentHero.powerstats.power}</li>
<li>{currentHero.powerstats.combat}</li>
</ul> */}