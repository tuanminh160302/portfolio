import locationTypes from "./location.types";

export const getLocation = (pathname) => ({
    type: locationTypes.GET_LOCATION,
    payload: pathname
})