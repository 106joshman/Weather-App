import React, { useState } from "react";

const weatherContext = React.createContext({
    location:'Lagos',
    setLocation:()=>{}
})

export const WeatherContextProvider = (props)=>{
    const [location,setLocation] =  useState('lagos')
      
    return(
        <weatherContext.Provider
        value={
            {
                location:location,
                setLocation:setLocation,
                // weather:weather,
                // setWeather:setWeather
            }
        }
        >
            {props.children}
        </weatherContext.Provider>

    )
}


export default weatherContext;