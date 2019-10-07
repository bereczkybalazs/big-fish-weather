import ReactDOM from "react-dom";
import React from "react";
import WeatherInfo from "./WeatherInfo";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WeatherInfo
        weather={{
            description: '',
            icon: '',
            id: 1,
            main: ''
        }} 
        country=''
        location=''
        temperature={12}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
});
