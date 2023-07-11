import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './store.js'
import Controller from './Controller.js'
import StateTest from './StateTest.js'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <Provider store={store}>
        <App />
        <Controller />
      </Provider>

      <div>
        <StateTest />
      </div>
    </div>
  </React.StrictMode>,
)
