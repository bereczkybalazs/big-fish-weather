import React from 'react';
import CurrentWeatherInstance from "../../services/Weather/CurrentWeather/CurrentWeather.instance";
import {AxiosError} from "axios";
import CurrentWeatherResponseModel from "../../models/CurrentWeatherResponse/CurrentWeatherResponse.model";
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import Loading from "../../components/Loading/Loading";
import PermissionDenied from "../../components/PermissionDenied/PermissionDenied";

interface State {
    weather: CurrentWeatherResponseModel;
    loading: boolean;
    dataReceived: boolean;
    geolocationEnabled: boolean;
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
        },
        loading: false,
        dataReceived: false,
        geolocationEnabled: true
    };

    async componentDidMount() {
        await this.fetchWeather();
    }

    getWeather () {
        return this.state.weather.weather[0] || {};
    }

    toggleLoading (loading: boolean) {
        this.setState((prevState) => {
            return {
                ...prevState,
                loading: loading
            }
        });
    }

    async fetchWeather() {
        if (!!navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.toggleLoading(true);
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                CurrentWeatherInstance.getInstance().fetchByLatLng(
                    lat,
                    lng
                ).then((res: CurrentWeatherResponseModel) => {
                    this.setState((prevState) => {
                        return {
                            ...prevState,
                            weather: res,
                            dataReceived: true
                        };
                    });
                    this.toggleLoading(false);
                }).catch((e: AxiosError) => {
                    console.warn('Could not fetch weather');
                    this.toggleLoading(false);
                })
            }, error => {
                if (error.code === error.PERMISSION_DENIED) {
                    this.setState((prevState) => {
                        return {
                            ...prevState,
                            geolocationEnabled: false
                        }
                    })
                }
            });
        }
    }

    render(): React.ReactElement<any>{
        return (
            <React.Fragment>
                {this.state.loading && <Loading />}
                {
                    this.state.dataReceived &&
                    <div className="weather">
                        <h2 className="weather__location">
                            {`${this.state.weather.sys.country}, ${this.state.weather.name}`}
                        </h2>
                        <WeatherInfo
                            weather={this.getWeather()}
                            temperature={this.state.weather.main.temp}
                        />
                    </div>
                }
                {!this.state.geolocationEnabled && <PermissionDenied/>}
            </React.Fragment>
        );
    }
}

export default Weather;