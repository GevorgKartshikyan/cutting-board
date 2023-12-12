import React, { type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type ListItem } from '../helpers/types'
import Button from './Button'
import InputForEdit from './InputForEdit'
import { openForChange, deleteBoard } from '../store/actions/board'

const List: FC = () => {
  const dispatch = useDispatch()
  const boardList = useSelector((state: { board: { list: ListItem[] } }) => state.board.list)
  const handleDeleteBoard = (id: string): void => {
    dispatch(deleteBoard({ id }))
  }
  const handleOnChange = (id: string): void => {
    dispatch(openForChange({ id }))
  }
  console.log(boardList)
  return (
        <>
            {boardList.length > 0 && (<div>
                <table className="data-table">
                    <thead>
                    <tr>
                        <th className="header-cell">№</th>
                        <th className="header-cell">Width</th>
                        <th className="header-cell">Height</th>
                        <th className="header-cell">Quantity</th>
                        <th className="header-cell">Color</th>
                        <th className="header-cell">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {boardList.map((item, index) => (
                        <tr key={item.id}>
                            <td className="data-cell">{index + 1}</td>
                            <td className="data-cell">
                                <InputForEdit
                                    disabled={!item.changed}
                                    value={item.width}
                                />
                            </td>
                            <td className="data-cell">
                                <InputForEdit
                                    disabled={!item.changed}
                                    value={item.height}
                                />
                            </td>
                            <td className="data-cell">
                                <InputForEdit
                                    disabled={!item.changed}
                                    value={item.quantity}
                                />
                            </td>
                            <td className="data-cell">
                               <div style={{
                                 backgroundColor: item.color,
                                 width: 50,
                                 height: 50
                               }}
                               />
                            </td>
                            <td className="data-cell">
                                <Button
                                    title='Delete'
                                    className='form__button'
                                    type='button'
                                    onAddData={(): void => {
                                      handleDeleteBoard(item.id)
                                    }}
                                />
                                <Button
                                    title={item.changed ? 'Save' : 'Edite'}
                                    className='form__button'
                                    type='button'
                                    onAddData={(): void => {
                                      handleOnChange(item.id)
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>)}
        </>
  )
}

export default List
