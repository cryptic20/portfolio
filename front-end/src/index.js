import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers from './reducer/'
import { loadState, saveState } from './reducer/localStorage'
import * as serviceWorker from './serviceWorker'

const persistedState = loadState()

const store = createStore(
  allReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  saveState({
    darkMode: store.getState().darkMode
  })
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
