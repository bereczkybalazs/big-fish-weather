import React from "react";
import WeatherModel from "../../models/CurrentWeatherResponse/Weather.model";

const WeatherInfo: React.FunctionComponent<{weather: WeatherModel, temperature: number}> = (props) => (

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
    </div>
);

export default WeatherInfo;