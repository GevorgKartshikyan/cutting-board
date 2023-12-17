import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import '../src/asstest/styles/index.scss'
import { Provider } from 'react-redux'
import store from './store'
import Modal from 'react-modal'
const rootElement = document.getElementById('root')
Modal.setAppElement('#root')
if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
        <Provider store={store}>
            <App/>
        </Provider>
  )
}

reportWebVitals()
