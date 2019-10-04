import axios from 'axios';

class WeatherService {
    constructor(private apiUrl: string, private apiKey: string) {
    }

    fetchByLatLng = async (lat: string, lng: string) => {
        try {
            const { data } = await axios.get(this.getRequestUrl(lat, lng));
            return data;
        } catch (e) {
            console.warn('Could not fetch data', e);
        }
    };

    getRequestUrl = (lat: string, lng: string): string => {
        return `${this.apiUrl}?appid=${this.apiKey}&lat=${lat}&lon=${lng}`;
    }
}

export default WeatherService;