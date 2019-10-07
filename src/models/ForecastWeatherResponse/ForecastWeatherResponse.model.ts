import CityModel from "./City/City.model";
import WeatherListItemModel from "./WeatherListItem/WeatherListItem.model";

export default interface ForecastWeatherResponseModel {
    city: CityModel;
    cnt: number;
    cod: string;
    message: number;
    list: Array<WeatherListItemModel>;
}
