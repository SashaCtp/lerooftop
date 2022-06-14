import React, { useEffect, useState } from "react";
import Card from "./Card"
import '../style/card.css';

const WeatherCard = () => {

    const [weather, setWeather] = useState([]);

    // TODO - ⚠️ Setup a config file and change credentials ⚠️
    const TOKEN = '617d81918aac72bde4dda3798e98c7f4bcad48caa8ff11beaf28bd45e7b39986';
    const headers = {
        'Accept' : 'application/json',
    };
    
    useEffect(() => {
        fetch(`http://api.meteo-concept.com/api/location/city?token=${TOKEN}&insee=35238`, {
            method: 'GET',
            headers: headers,
        })
        .then(data => data.json())
        .then(data => console.log(data.city))
        .catch(err => console.error(err));
    },[]);
    return (
        <Card icon='⛅' title='Weather'>
            LELELELELELLELLELELLE
        </Card>
    )

}

export default WeatherCard;