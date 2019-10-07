import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './Weather';
import { shallow } from 'enzyme';
import Loading from "../../components/Loading/Loading";
import PermissionDenied from "../../components/PermissionDenied/PermissionDenied";
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Weather />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it(`on loading`, () => {
    const weather = shallow(<Weather />);
    weather.setState({loading: true});
    expect(weather.find(Loading).length).toBe(1);
});

it(`on disabled geolocation`, () => {
    const weather = shallow(<Weather />);
    weather.setState({
        geolocationEnabled: false
    });
    expect(weather.find(PermissionDenied).length).toBe(1);
});

it(`on data received`, () => {
    const weather = shallow(<Weather />);
    weather.setState({
        dataReceived: true
    });
    expect(weather.find(WeatherInfo).length).toBe(1);
});