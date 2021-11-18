import React from 'react';
// import rain from "../images/rain-big.png";
// import axios from "axios";

const Today = () => {
   
    // date and time function
    const dateWork = (d) => {
        let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
        let days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date}, ${month} ${year}`
        // return ( day + date + "," + month + year )
    }
    
    // axios Api call function
    /* const basURL = "htttp://api.openweathermap.org/data/2.5/weather?q=52490&appid=9ad0b189287d876d57d8ecf0fb0c07ed";
    
    const [data, setData] = React.useState("");

    React.useState(() => {
        axios
        .get(baseURL)
        .then((response) => {
            console.log(res.weather.forecast)
            setDate(res.weather.forecast)
        }).catch((error) => {
            console.log(error)
        })
    });
    */ 


    // function getTodos() {
        // axios({
        //   method: 'get',
        //   url: 'https://jsonplaceholder.typicode.com/todos',
        //   params: {
        //     _limit: 5
        //   }
        // })
        //   .then(res => showOutput(res))
        //   .catch(err => console.error(err));
      
    //     axios
    //       .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
    //         timeout: 5000
    //       })
    //       .then(res => showOutput(res))
    //       .catch(err => console.error(err));
    //   }

    return (
        <div className="weather">
            {/* get daily location time */}
            <div className="show-date">
                <p className="location">Lagos, Ng</p>
                <p className="date">{dateWork(new Date())}</p>
                
            </div>
            {/* get location weather report */}
            <div className="temp">
                <div className="img shower"></div>
                <div className="fig">
                    <div id="deg" className="deg">15°c</div>
                    <div id="" className="w-mood">Cloudy</div>
                </div>
            </div>
        </div>
    );
}
 
export default Today;