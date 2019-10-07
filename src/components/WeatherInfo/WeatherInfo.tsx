import React from "react";
import WeatherModel from "../../models/CurrentWeatherResponse/Weather.model";
import './WeatherInfo.scss';

const WeatherInfo: React.FunctionComponent<{
        weather: WeatherModel,
        temperature: number,
        country: string,
        location: string
}> = (props) => (

    <div className="weather-info">
        <img
            className="weather-info__logo"
            src={`${process.env.REACT_APP_WEATHER_IMG_URL}${props.weather.icon}@2x.png`}
            alt={props.weather.description}
        />
        <div className="weather-info__temperature">
            {props.temperature} °C
        </div>
        <div className="weather-info__description">
            {props.weather.description}
        </div>
        <h2 className="weather-info__location">
            {`${props.country}, ${props.location}`}
        </h2>
    </div>
);

export default WeatherInfo;