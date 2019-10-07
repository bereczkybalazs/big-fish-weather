import CloudsModel from "./Clouds.model";
import MainWeatherModel from "./MainWeather.model";
import RainModel from "./Rain.model";
import SysModel from "./Sys.model";
import WeatherModel from "./Weather.model";
import WindModel from "./Wind.model";

export default interface WeatherListItemModel {
    clouds: CloudsModel;
    dt: number;
    dt_txt: string;
    main: MainWeatherModel;
    rain: RainModel;
    sys: SysModel;
    weather: Array<WeatherModel>;
    wind: WindModel;
}