import darkModeReducer from './darkModeReducer'
import currentPageReducer from './currentPageReducer'
import selectedButtonReducer from './selectedButtonReducer'
import fetchReducer from './fetchReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  darkMode: darkModeReducer,
  currentPage: currentPageReducer,
  selectedButton: selectedButtonReducer,
  fetchedData: fetchReducer
})

export default allReducers
