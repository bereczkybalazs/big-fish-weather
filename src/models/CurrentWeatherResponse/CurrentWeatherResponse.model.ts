import CloudsModel from "./Clouds.model";
import CoordsModel from "./CoordsModel";
import MainWeatherModel from "./MainWeather.model";
import SysModel from "./Sys.model";
import WindModel from "./Wind.model";
import WeatherModel from "./Weather.model";

export default interface CurrentWeatherResponseModel {
    base: string;
    clouds: CloudsModel;
    cod: number;
    coord: CoordsModel;
    dt: number;
    id: number;
    main: MainWeatherModel;
    name: string;
    sys: SysModel;
    timezone: number;
    visibility: number;
    weather: Array<WeatherModel>;
    wind: WindModel;
}
