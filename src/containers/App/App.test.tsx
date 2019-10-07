import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from "enzyme";
import Weather from "../Weather/Weather";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it(`renders Weather`, () => {
  const app = shallow(<App />);
  expect(app.find(Weather).length).toBe(1);
});