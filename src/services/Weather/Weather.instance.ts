import WeatherService from "./Weather.service";
import {env} from "../../config";

class WeatherInstance {

    private static instance: WeatherService;

    static getInstance(): WeatherService {
        if (
            !WeatherInstance.instance
        ) {
            WeatherInstance.instance = new WeatherService(
                env.REACT_APP_WEATHER_API_URL,
                env.REACT_APP_WEATHER_API_KEY
            )
        }

        return WeatherInstance.instance;
    }
}