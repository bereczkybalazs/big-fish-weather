class LocationService {
    private lat: number | null = null;
    private lng: number | null = null;
    public isGeolocationEnabled: boolean = false;

    constructor() {
        if (!!navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.isGeolocationEnabled = true;

            }, () => {
                console.warn('Access to location is denied!')
            });
        }
    };

    getLat = () => {
        return this.lat;
    };

    getLng = () => {
        return this.lng;
    };
}

export default LocationService;