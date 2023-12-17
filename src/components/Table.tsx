import React, { type ChangeEvent, type FC, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type ListItem } from '../helpers/types'
import Button from './Button'
import InputForEdit from './InputForEdit'
import { openForChange, deleteBoard, saveChanges } from '../store/actions/board'
import Modal from 'react-modal'
import BoardFieldsModal from './BoardFieldsModal'
import { useTranslation } from 'react-i18next'
const Table: FC = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const [boardId, setBoardId] = useState('')
  const [showModal, setShowModal] = useState(false)
  const boardList = useSelector((state: { board: { list: ListItem[] } }) => state.board.list)
  const [form, setForm] = useState({
    width: 0,
    height: 0,
    quantity: 0,
    id: ''
  })
  const handleDeleteBoard = (id: string): void => {
    dispatch(deleteBoard({ id }))
  }
  const handleOnChange = useCallback((id: string, width: number, height: number, quantity: number): void => {
    dispatch(openForChange({ id }))
    setForm({
      width,
      height,
      quantity,
      id
    })
  }, [form])

  const handleChange = useCallback((key: string) => (event: ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [key]: event.target.value })
  }, [form])

  const handleSaveChanges = useCallback((id: string) => {
    dispatch(openForChange({ id }))
    dispatch(saveChanges({
      width: form.width.toString(),
      height: form.height.toString(),
      quantity: form.quantity.toString(),
      id: form.id
    }))
  }, [form])
  return (
        <>
            {boardList.length > 0 && (<div>
                <table className="data-table">
                    <thead>
                    <tr>
                        <th className="header-cell">№</th>
                        <th className="header-cell">{t('width')}</th>
                        <th className="header-cell">{t('height')}</th>
                        <th className="header-cell">{t('quantity')}</th>
                        <th className="header-cell">{t('color')}</th>
                        <th className="header-cell">{t('actions')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {boardList.map((item, index) => (
                        <tr key={item.id}>
                            <td className="data-cell">{index + 1}</td>
                            <td className="data-cell">
                                <InputForEdit
                                    onChange={handleChange}
                                    field='width'
                                    disabled={!item.changed}
                                    value={item.width}
                                />
                            </td>
                            <td className="data-cell">
                                <InputForEdit
                                    onChange={handleChange}
                                    field='height'
                                    disabled={!item.changed}
                                    value={item.height}
                                />
                            </td>
                            <td className="data-cell">
                                <InputForEdit
                                    onChange={handleChange}
                                    field='quantity'
                                    disabled={!item.changed}
                                    value={item.quantity}
                                />
                            </td>
                            <td className="data-cell">
                                <div style={{
                                  backgroundColor: item.color,
                                  width: 50,
                                  height: 50,
                                  opacity: 0.6
                                }}
                                />
                            </td>
                            <td className="data-cell">
                                <Button
                                    title={t('delete')}
                                    className='form__button'
                                    type='button'
                                    onAddData={(): void => {
                                      handleDeleteBoard(item.id)
                                    }}
                                />
                                <Button
                                    title={item.changed ? t('save') : t('edit')}
                                    className='form__button'
                                    type='button'
                                    onAddData={(): void => {
                                      if (!item.changed) {
                                        handleOnChange(item.id, item.width, item.height, item.quantity)
                                      } else {
                                        handleSaveChanges(item.id)
                                      }
                                    }}
                                />
                                <Button
                                    title={t('edit_detail')}
                                    className='form__button'
                                    type='button'
                                    onAddData={(): void => {
                                      setShowModal(true)
                                      setBoardId(item.id)
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>)}
            <Modal
                isOpen={showModal}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => { setShowModal(false) }}
            >
                <BoardFieldsModal
                    onCloseModal={() => { setShowModal(false) }}
                    id={boardId}
                />
            </Modal>
        </>
  )
}

export default Table
