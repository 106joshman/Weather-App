import { useState, useEffect } from 'react';
import Card from './card';

const Body = () => {
    // const [info, setInfo] = useState({});
    
    return (
        <div className="wrapper">
            <div className="title">
                <h5>Weather App</h5>
            </div>
            <div className="wraper">
                <div className="weather present">

                </div>
                <div className="weather future">
                    <div className="cards">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Body;