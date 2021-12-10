import { combineReducers } from 'redux'
import { flightReducer } from './flightReducer'
import { tripsReducer } from './tripsReducer'

export const reducers = combineReducers({
    flightReducer,
    tripsReducer
});
