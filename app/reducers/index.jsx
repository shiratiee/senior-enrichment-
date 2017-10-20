import { combineReducers } from 'redux'
import campuses from './campuses';
import students from './students';
import { createStore, applyMiddleware } from 'redux';


const rootReducer=  combineReducers({students, campuses});

export * from './campuses';
export * from './students';

export default rootReducer

