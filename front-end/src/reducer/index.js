import darkModeReducer from './darkModeReducer'
import currentPageReducer from './currentPageReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  darkMode: darkModeReducer,
  currentPage: currentPageReducer
})

export default allReducers
