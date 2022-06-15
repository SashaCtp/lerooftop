import React, { Dispatch, useEffect, useState } from "react";
import Card from "../Card/Card"
import './WeatherCard.css';

const WeatherCard = () => {
    const [weatherData, setWeatherData]: [any, Dispatch<any>] = useState();
    const getLocation = () => {

        let location = {
            latitude: 49,
            longitude: 2.5
        }

        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position: any) => {
                    location.latitude = position.coords.latitude;
                    location.longitude = position.coords.longitude;
                    console.log(`Geolocation : ${location.latitude}, ${location.longitude}`);
                    resolve(location);
                });
            } else {
                console.log("Geolocation is not supported by this browser.");
                reject("Geolocation is not supported by this browser");
            }
        });
    }

    useEffect(() => {

        getLocation().then((location: any) => {
            const TOKEN = '617d81918aac72bde4dda3798e98c7f4bcad48caa8ff11beaf28bd45e7b39986';
            fetch(
                `https://api.meteo-concept.com/api/forecast/nextHours?latlng=${location.latitude},${location.longitude}&token=${TOKEN}`,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(data => data.json())
                .then(data => {setWeatherData(data); console.log(data)})
                .catch(err => console.error(err));
        })
            .catch(err => console.error(err));
    }, []);

return (
    <Card icon='⛅' title='Weather'>
        <div className="container">
            <div className="temperature">
                <h1>
                    {weatherData ? weatherData?.forecast[0].temp2m + '°' : ''}
                </h1>
                <h3>
                    {weatherData?.city.name}
                </h3>
            </div>
            <div className="parameter">
                <div className="windspeed">
                    <h3>
                        Windspeed
                    </h3>
                    <h1>
                        {weatherData?.forecast[0].wind10m + ' km/h'}
                    </h1>

                </div>
                <div className="humidity">
                    <h3>
                        Humidity
                    </h3>
                    <h1>
                        {weatherData?.forecast[0].rh2m + ' %'}
                    </h1>

                </div>
                <div className="precipitation">
                    <h3>
                        Precipitation probability
                    </h3>
                    <h1>
                        {weatherData?.forecast[0].probarain + ' %'}
                    </h1>

                </div>
            </div>
        </div>
    </Card>
)

};

export default WeatherCard;