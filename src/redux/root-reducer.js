import { combineReducers } from "redux";
import toggleReducer from './toggle/toggle.reducer.js';
import loadTriggerReducer from "./load-trigger/load-trigger.reducer.js";
import locationReducer from "./location/location.reducer.js";

export default combineReducers({
    toggle: toggleReducer,
    loaded: loadTriggerReducer,
    location: locationReducer
})