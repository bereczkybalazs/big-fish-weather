import React from 'react';
import ChuckNorris from './chuck-norris.png';
import './PermissionDenied.scss';

const PermissionDenied: React.FunctionComponent<{}> = () => (
    <div className="permission-denied">
        <img src={ChuckNorris} alt="Chuck Norris" className="permission-denied__image"/>
        <h2 className="permission-denied__text">
            Enable the geolocation Immediately!!!
        </h2>
    </div>
);

export default PermissionDenied;