// import React, { useState, useEffect } from 'react';

// const Header = () => {
    // const [location, setLocation] =  useState('');
    // const [weather, setWeather] =  useState('');
    // const holder = "Enter city or location...";
    // const [error, setError] =  useState(null);

    // const api = {
    //     base: "https://api.openweathermap.org/data/2.5/",
    //     key: "9ad0b189287d876d57d8ecf0fb0c07ed"
    // };

    // useEffect(() => {
    //     const search = () => {
    //         axios
    //         .get(`${api.base}weather?q=${location}&units=metric&appid=${api.key}`)
    //         .then((res) => {
    //             console.log(res.data);
    //         })
    //     }
    //     search()
    // }, [])
    
    // const locationFind = (event)=>{
    //     const {value} = event.target
    //     setLocation(value)
    // }
    
    // const findLocation = (event)=>
    // {
    //     search();
    //     event.preventDefault();
    // }
    
    // const search = (event)=> {
    //     axios
    //     .get(`${api.base}weather?q=${location}&units=metric&appid=${api.key}`)
    //     .then((res) => {
    //         console.log(res.data);
    //         setWeather(res.data)
    //         setLocation('')
    //         setError(null)
    //     })
    //     .catch((err)  =>{
    //         console.log(err.message)
    //         setError(err.message)
    //     });
    // }

    // useEffect(() => {
    //     search()
    // }, [])

    // return (
        // <div className="header">
        //     <div className="head-logo">
        //         <span>D</span>ev-<span>G</span>uy
        //     </div>
        //     <div className="search-box" onSubmit={}>
        //         <input 
        //             type="search"
        //             className="Search"
        //             onChange={e => setLocation(e.target.value)}
        //             value={location}
        //             name="search-box"
        //             placeholder={holder}
        //             id=""/>
        //     </div>
        // </div>
//     );
// }
// export default Header;