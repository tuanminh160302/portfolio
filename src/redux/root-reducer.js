import { combineReducers } from "redux";
import toggleReducer from './toggle/toggle.reducer.js'

export default combineReducers({
    toggle: toggleReducer
})