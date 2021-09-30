import loadTriggerTypes from "./load-trigger.types";

const INITIAL_STATE = {
    loaded: false
}

const loadTriggerReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case loadTriggerTypes.SET_LOADED:
            return {
                ...state,
                loaded: true
            }
        default:
            return state
    }
}

export default loadTriggerReducer;