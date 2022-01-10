import reducer from './reducer/index'
import { createStore } from 'redux'
import { combineReducers } from 'redux'
const store=createStore(reducer)

export default store