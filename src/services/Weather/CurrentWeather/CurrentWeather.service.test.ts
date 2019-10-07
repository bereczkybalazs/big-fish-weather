import CurrentWeatherService from "./CurrentWeatherService";
import faker from 'faker';
import axios from 'axios';
jest.mock('axios');

let fakeUrl: string;
let fakeAPIKey: string;
let fakeLat: number;
let fakeLng: number;
let transformedUrl: string;
let weather: CurrentWeatherService;
let mockAxios: jest.Mocked<typeof axios>;

beforeEach(() => {
    fakeUrl = faker.internet.url();
    fakeAPIKey = faker.random.alphaNumeric(10);
    fakeLat = +faker.address.latitude();
    fakeLng = +faker.address.longitude();
    transformedUrl = `${fakeUrl}?appid=${fakeAPIKey}&lat=${fakeLat}&lon=${fakeLng}&units=metric`;

    mockAxios = axios as jest.Mocked<typeof axios>;
    weather = new CurrentWeatherService(
        mockAxios,
        fakeUrl,
        fakeAPIKey
    );
});


it(`transforms url by params properly`, () => {

    const requestUrl = weather.getRequestUrl(fakeLat, fakeLng);

    expect(requestUrl).toBe(transformedUrl);
});

it(`on successful request`, async () => {

    const serverResponse = {data: 1};

    mockAxios.get.mockResolvedValue(serverResponse);

    const response = weather.fetchByLatLng(fakeLat, fakeLng);

    expect(mockAxios.get).toHaveBeenCalledWith(transformedUrl);
    expect(await response).toBe(serverResponse.data);
});


it(`on error request`, async () => {

    const error = 1;

    expect.assertions(2);
    mockAxios.get.mockRejectedValue(error);
    weather.fetchByLatLng(fakeLat, fakeLng).catch(e => {
        expect(e).toBe(error);
    });

    expect(mockAxios.get).toHaveBeenCalledWith(transformedUrl);
});

