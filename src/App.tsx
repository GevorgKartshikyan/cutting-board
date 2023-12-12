import React, { type FC } from 'react'
import Form from './components/Form'
import Table from './components/Table'
import Board from './components/Board'
import SelectBoard from './components/SelectBoard'

const App: FC = () => {
  return (
        <>
            <SelectBoard/>
            <Form/>
            <Table/>
            <Board/>
        </>
  )
}

export default App
