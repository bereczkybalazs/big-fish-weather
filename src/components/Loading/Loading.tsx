import React from "react";
import './Loading.scss';

const Loading: React.FunctionComponent<{}> = () => (
    <div className="loading">
        <div className="loading__animation">
            <div></div>
            <div></div>
        </div>
        <div className="loading__text">
            Loading
        </div>
    </div>
);

export default Loading;