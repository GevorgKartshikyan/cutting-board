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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
