import CoordsModel from "./CoordsModel";

export default interface CityModel {
    coord: CoordsModel;
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
}
