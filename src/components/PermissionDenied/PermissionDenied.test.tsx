import ReactDOM from "react-dom";
import React from "react";
import PermissionDenied from "./PermissionDenied";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PermissionDenied />, div);
    ReactDOM.unmountComponentAtNode(div);
});
