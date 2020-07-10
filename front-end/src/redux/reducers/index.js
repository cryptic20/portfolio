import darkModeReducer from './darkModeReducer'
import currentPageReducer from './currentPageReducer'
import selectedButtonReducer from './selectedButtonReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  darkMode: darkModeReducer,
  currentPage: currentPageReducer,
  selectedButton: selectedButtonReducer
})

export default allReducers
