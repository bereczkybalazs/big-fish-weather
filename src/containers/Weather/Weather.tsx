import React from 'react';
import WeatherServiceInstance from "../../services/Weather/Weather.service.instance";
import WeatherResponseModel from "../../models/WeatherResponse/WeatherResponse.model";
import {AxiosError} from "axios";

interface State {
    weather: WeatherResponseModel;
}

class Weather extends React.Component<{}, State> {

    state: Readonly<State> = {
        weather: {
            city: {
                coord: {
                    lat: 0,
                    lng: 0
                },
                country: '',
                id: 0,
                name: '',
                population: 0,
                sunrise: 0,
                sunset: 0,
                timezone: 0
            },
            cnt: 0,
            cod: '',
            message: 0,
            list: []
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
                WeatherServiceInstance.getInstance().fetchByLatLng(
                    lat,
                    lng
                ).then((res: WeatherResponseModel) => {
                    this.setState((prevState) => {
                        this.state = {
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
            <div>
                Weather
            </div>
        );
    }
}

export default Weather;