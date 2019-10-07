import CurrentWeatherService from "./CurrentWeatherService";
import axios from 'axios';

class CurrentWeatherInstance {

    private static instance: CurrentWeatherService;

    static getInstance(): CurrentWeatherService {
        if (
            !CurrentWeatherInstance.instance
        ) {
            CurrentWeatherInstance.instance = new CurrentWeatherService(
                axios,
                process.env.REACT_APP_WEATHER_CURRENT_API_URL || '',
                process.env.REACT_APP_WEATHER_API_KEY || ''
            )
        }

        return CurrentWeatherInstance.instance;
    }
}

export default CurrentWeatherInstance;