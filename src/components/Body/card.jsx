import React from 'react';
import axios from "axios";
// import rain from "../images/rain-big.png";


const Card = () => {
    const cardData = [1,2,3,4,5,6];

    return (
        // weather details
        <div className="card">
            {/* present weather reading */}
            <div className="reading">
                <div className="degr range">
                    <p className="high">23°</p>/
                    <p className="low">14°</p>
                </div>

                <div className="speed range">
                    <span className="wind high">7mph</span>/
                    <span className="humidity low">0%</span>
                </div>
            </div>

            {/* future weather readings */}
            <div className="update">
                <h3>Report for the week</h3>
                <div className="card-box">
                    {
                        cardData.map(() => {
                            return (
                                <div className="cards">
                                    <h3 className="day">Mon</h3>
                                    <div className="img shower"></div>
                                    {/* <img src={rain} alt="rainy cloud" srcset=""/> */}
                                    <p className="temp-val">32°</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;