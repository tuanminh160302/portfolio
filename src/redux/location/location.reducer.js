import locationTypes from "./location.types";

const INITIAL_STATE = {
    location: '' // change init value?
}

const locationReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case locationTypes.GET_LOCATION:
            return {
                ...state,
                location: action.payload
            }

        default: 
            return state
    }
}

export default locationReducer 