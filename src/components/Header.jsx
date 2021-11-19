import React, { useContext, useState } from 'react';
import weatherContext from './store/weathercontext';
// import Today from './Body/Today';
import axios from "axios";

const Header = () => {
    const ctx = useContext(weatherContext)
    const api = {
        base: "https://api.openweathermap.org/data/2.5/",
    key: "9ad0b189287d876d57d8ecf0fb0c07ed"
    };
    const locationFind = (event)=>{
        const {value} = event.target
        ctx.setLocation(value)
    }
    const findLocation = (event)=>
    {
        search();
        event.preventDefault();
    }
    
    const search = ()=> {
            axios
            .get(`${api.base}weather?q=${ctx.location}&units=metric&appid=${api.key}`, {
        timeout: 20000})
      .then(res => console.log(res))
      .catch(err => console.error(err));
        }
    return (
        <div className="header">
            <div className="head-logo">
                <span>D</span>ev-<span>G</span>uy
            </div>
            <div className="search-box">
                <form action="to get location" method="get" onSubmit={findLocation}>
                    <input 
                        type="search"
                        className="Search"
                        onChange={locationFind}
                        value={ctx.location}
                        name="search-box"
                        placeholder="Enter city or location..."
                        id=""/>
                </form>
            </div>
        </div>
    );
}
export default Header;