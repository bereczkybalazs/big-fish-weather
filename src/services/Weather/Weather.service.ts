import {AxiosError, AxiosInstance, AxiosResponse} from "axios";

class WeatherService {
    constructor(private axios: AxiosInstance, private apiUrl: string, private apiKey: string) {
    }

    fetchByLatLng = async (lat: number, lng: number) => {

        return new Promise<AxiosResponse | AxiosError>((resolve, reject) => {
            this.axios.get(this.getRequestUrl(lat, lng))
                .then((res: AxiosResponse) => {
                    resolve(res.data);
                }).catch((error: AxiosError) => {
                    reject(error);
                });
        });
    };

    getRequestUrl = (lat: number, lng: number): string => {
        return `${this.apiUrl}?appid=${this.apiKey}&lat=${lat}&lon=${lng}&units=metric`;
    }
}

export default WeatherService;