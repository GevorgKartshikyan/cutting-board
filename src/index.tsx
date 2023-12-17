import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { I18nextProvider } from 'react-i18next'
import reportWebVitals from './reportWebVitals'
import '../src/asstest/styles/index.scss'
import { Provider } from 'react-redux'
import store from './store'
import Modal from 'react-modal'
import i18n from './18n'

const rootElement = document.getElementById('root')
Modal.setAppElement('#root')
if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <App/>
            </I18nextProvider>
        </Provider>
  )
}

reportWebVitals()
