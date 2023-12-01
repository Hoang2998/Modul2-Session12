import {reducer} from './Reducer/Reducer.js'
import {createStore , combineReducers} from 'redux'
import {Job} from './Reducer/Job.js'

let rootReducers = combineReducers({
    reducer,
    Job
})
export const store = createStore(rootReducers)