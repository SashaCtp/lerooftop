import React, { useEffect, useState } from "react";
import Card from "./Card"
import '../style/card.css';

const WeatherCard = () => {
    var latitude = "49"
    var longitude = "2.5"
    const [weatherData, setWeatherData] = useState(null);
    const getLocation = async () => {
        if (navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.")
        }
    }
    function showPosition(position) {
        latitude = position.coords.latitude
        longitude = position.coords.longitude
        console.log(latitude, longitude)
    }
    useEffect(() => {
        getLocation()
        const TOKEN = '617d81918aac72bde4dda3798e98c7f4bcad48caa8ff11beaf28bd45e7b39986';
        console.log("MICHEL")
        fetch(`https://api.meteo-concept.com/api/forecast/nextHours?latlng=${latitude},${longitude}&token=${TOKEN}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(data => data.json())
            .then(data => setWeatherData(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <Card icon='⛅' title='Weather'>
            {console.log(weatherData)}
            <div style={styles.container}>
                <div style={styles.temperature}>
                    <h1>
                        {weatherData?.forecast[0].temp2m + '°'}
                    </h1>
                    <h3>
                        {weatherData?.city.name}
                    </h3>
                </div>
                <div style={styles.parameter}>
                    <div style={styles.windspeed}>
                        <h3>
                            Windspeed
                        </h3>
                        <h1>
                            {weatherData?.forecast[0].wind10m + ' km/h'}
                        </h1>

                    </div>
                    <div style={styles.humidity}>
                        <h3>
                            Humidity
                        </h3>
                        <h1>
                            {weatherData?.forecast[0].rh2m + ' %'}
                        </h1>

                    </div>
                    <div style={styles.precipitation}>
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
const styles: { [name: string]: React.CSSProperties } = {
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    temperature: {
    },
    city: {
        flexDirection: 'row',
    },
    parameter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
};
export default WeatherCard;