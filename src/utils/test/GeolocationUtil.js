
export const fakeLat = 51.1;
export const fakeLng = 45.3;
export const fakeGeolocationResponse = {
    coords: {
        latitude: fakeLat,
        longitude: fakeLng
    }
};

export const getSuccessMockGeolocation = () => {
    return {
        getCurrentPosition: jest.fn()
            .mockImplementationOnce((success) => Promise.resolve(success(fakeGeolocationResponse)))
    };
};


export const getErrorMockGeolocation = () => {
    return {
        getCurrentPosition: jest.fn()
            .mockImplementationOnce((success, error) => Promise.resolve(error()))
    };
};

export const setSuccessMockGeolocation = () => {
    global.navigator.geolocation = getSuccessMockGeolocation();
};

export const setErrorMockGeolocation = () => {
    global.navigator.geolocation = getErrorMockGeolocation();
};