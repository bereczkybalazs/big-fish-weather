import React from 'react';
import CurrentWeatherInstance from "../../services/Weather/CurrentWeather/CurrentWeather.instance";
import ForecastWeatherResponseModel from "../../models/ForecastWeatherResponse/ForecastWeatherResponse.model";
import {AxiosError} from "axios";
import CurrentWeatherResponseModel from "../../models/CurrentWeatherResponse/CurrentWeatherResponse.model";
import CloudsModel from "../../models/CurrentWeatherResponse/Clouds.model";
import CoordsModel from "../../models/CurrentWeatherResponse/CoordsModel";
import MainWeatherModel from "../../models/CurrentWeatherResponse/MainWeather.model";
import SysModel from "../../models/CurrentWeatherResponse/Sys.model";
import WeatherModel from "../../models/CurrentWeatherResponse/Weather.model";
import WindModel from "../../models/CurrentWeatherResponse/Wind.model";

interface State {
    weather: CurrentWeatherResponseModel;
}

class Weather extends React.Component<{}, State> {

    state: Readonly<State> = {
        weather: {
            base: '',
            clouds: {
                all: 0
            },
            cod: 0,
            coord: {
                lat: 0,
                lng: 0
            },
            dt: 0,
            id: 0,
            main: {
                humidity: 0,
                pressure: 0,
                temp: 0,
                temp_max: 0,
                temp_min: 0
            },
            name: '',
            sys: {
                country: '',
                id: 0,
                message: 0,
                sunrise: 0,
                sunset: 0,
                type: 0
            },
            timezone: 0,
            visibility: 0,
            weather: [],
            wind: {
                deg: 0,
                speed: 0
            }
        }
    };

    async componentDidMount() {
        await this.fetchWeather();
    }

    async fetchWeather() {
        if (!!navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                CurrentWeatherInstance.getInstance().fetchByLatLng(
                    lat,
                    lng
                ).then((res: CurrentWeatherResponseModel) => {
                    this.setState((prevState) => {
                        return {
                            ...prevState,
                            weather: res
                        };
                    });
                }).catch((e: AxiosError) => {
                    console.warn('Could not fetch weather');
                })
            });
        }

    }

    render(): React.ReactElement<any>{
        return (
            <div className="weather">
                <h2 className="weather__location">
                    {`${this.state.weather.sys.country}, ${this.state.weather.name}`}
                </h2>
            </div>
        );
    }
}

export default Weather;