import React from 'react';
import LocationService from "./Location.service";
import {fakeLat, fakeLng, setErrorMockGeolocation, setSuccessMockGeolocation} from "../../utils/test/GeolocationUtil";


it('on enabled geolocation success', () => {
    setSuccessMockGeolocation();
    const location = new LocationService();
    expect(location.isGeolocationEnabled).toBe(true);
    expect(location.getLat()).toBe(fakeLat);
    expect(location.getLng()).toBe(fakeLng);
});

it('on enabled geolocation error', () => {
    setErrorMockGeolocation();
    const location = new LocationService();
    expect(location.isGeolocationEnabled).toBe(false);
    expect(location.getLat()).toBe(null);
    expect(location.getLng()).toBe(null);
});

it('on disabled geolocation', () => {
    const location = new LocationService();
    expect(location.isGeolocationEnabled).toBe(false);
    expect(location.getLat()).toBe(null);
    expect(location.getLng()).toBe(null);
});

