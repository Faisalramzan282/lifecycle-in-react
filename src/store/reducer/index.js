
// for update of the state
import { combineReducers } from 'redux'
import auth from './auth'
import reducer from './reducer'

export default combineReducers({
    auth:auth,
    reducer:reducer
})