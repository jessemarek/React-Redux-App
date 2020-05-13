import React from 'react'
import ReactDOM from 'react-dom'

//Redux Dependencies
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

//Middleware
import thunk from 'redux-thunk'
import logger from 'redux-logger'

//Reducers
import rootReducer from './store/reducers'

//Components
import App from './App'

//Styles
import './index.css'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)
