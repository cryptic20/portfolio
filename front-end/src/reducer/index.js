import darkModeReducer from './darkModeReducer'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
  darkMode: darkModeReducer
})

export default allReducers
