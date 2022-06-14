import React, { useEffect, useState } from "react";
import Card from "./Card"
import '../style/card.css';

const WeatherCard = () => {

    const [weather, setWeather] = useState([]);
    var myHeaders = new Headers({
        "Accept" : "application/json",
        "Access-Control-Allow-Origin" : "http://localhost:3000/"
      });
    
    useEffect(() => {
        fetch('http://api.meteo-concept.com/api/location/city?token=617d81918aac72bde4dda3798e98c7f4bcad48caa8ff11beaf28bd45e7b39986&insee=35238', {
            method: 'GET',
            headers: myHeaders,
        })
        .then(data => data.json())
        .then(data => console.log(data.city))
    },[]);
    return (
        <Card icon='⛅' title='Weather'>
            LELELELELELLELLELELLE
        </Card>
    )

}

export default WeatherCard;