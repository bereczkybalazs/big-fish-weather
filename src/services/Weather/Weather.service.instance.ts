import WeatherService from "./Weather.service";
import axios from 'axios';

class WeatherServiceInstance {

    private static instance: WeatherService;

    static getInstance(): WeatherService {
        if (
            !WeatherServiceInstance.instance
        ) {
            WeatherServiceInstance.instance = new WeatherService(
                axios,
                process.env.REACT_APP_WEATHER_API_URL || '',
                process.env.REACT_APP_WEATHER_API_KEY || ''
            )
        }

        return WeatherServiceInstance.instance;
    }
}

export default WeatherServiceInstance;