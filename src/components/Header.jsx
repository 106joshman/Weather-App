import React, { useContext } from 'react';
// import Today from './Body/Today';
import axios from "axios";

const Header = () => {
    const api = {
        base: "htttp://api.openweathermap.org/data/2.5/",
    key: {/*"9ad0b189287d876d57d8ecf0fb0c07ed"*/}
    };
    const location = useContext("");
    
    const search = evt => {
        if (evt.key === "Enter") {
            axios
            .get(`${api.base}weather?q=${location}&units=metric&appid=${api.key}`, {
        timeout: 2000
    })
      .then(res => (res))
      .catch(err => console.error(err));
        }
    }
    return (
        <div className="header">
            <div className="head-logo">
                <span>D</span>ev-<span>G</span>uy
            </div>
            <div className="search-box">
                <form action="to get location" method="get">
                    <input 
                        type="search"
                        className="Search"
                        onChange={e =>location(e.target.value)}
                        value={location}
                        onKeyPress={search}
                        name="search-box"
                        placeholder="Enter city or location..."
                        id=""/>
                </form>
            </div>
        </div>
    );
}
 
export default Header;