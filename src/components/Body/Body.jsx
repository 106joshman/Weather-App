// import { useState, useEffect } from 'react';
import Card from './card';
import Today from './Today';
// import rain from "../images/rain-big.png";

const Body = () => {
    
    return (
        <div className="wrapper">
            <Today />
            <Card />
        </div>
    );
}
 
export default Body;