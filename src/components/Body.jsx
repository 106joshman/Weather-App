import { useState, useEffect } from 'react';

const Body = () => {
    // const [info, setInfo] = useState({});
    
    return (
        <div className="wrapper">
            <div className="title">
                <h5>Weather App</h5>
            </div>
            <div className="wrapem">
                <div className="weather present"></div>
                <div className="weather future">
                    <div className="cards">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Body;