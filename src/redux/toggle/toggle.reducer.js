import toggleTypes from "./toggle.types";

const INITIAL_STATE = {
    toggle: false
}

const toggleReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case toggleTypes.SET_TOGGLE:
            return {
                ...state,
                toggle: !state.toggle
            }
        default: 
            return state
    }
}

export default toggleReducer;
