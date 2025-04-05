import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'   // enables all components in the application to access the Redux store
import store from './store.js'           // holds the application's state, using the defined reducers

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <App /> 
    </Provider>
  </React.StrictMode>,
)
