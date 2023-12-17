import React, { type FC, useEffect } from 'react'
import Form from './components/Form'
import Table from './components/Table'
import Board from './components/Board'
import Top from './components/Top'
import i18n from 'i18next'

const App: FC = () => {
  useEffect(() => {
    // @ts-expect-error
    void i18n.changeLanguage(window.localStorage.getItem('language'))
  }, [window.localStorage.getItem('language')])
  return (
        <>
            <Top/>
            <Form/>
            <Table/>
            <Board/>
        </>
  )
}

export default App
