import React from 'react';
import WeatherServiceInstance from "../../services/Weather/Weather.service.instance";

class Weather extends React.Component {

    async componentDidMount() {
        console.log(await this.fetchData())
    }

    async fetchData() {
        return new Promise<any>(((resolve, reject) => {
            if (!!navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    WeatherServiceInstance.getInstance().fetchByLatLng(
                        lat,
                        lng
                    ).then(res => {
                        resolve(res);
                    }).catch(e => {
                        reject(e);
                    })
                });
            }
        }))

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