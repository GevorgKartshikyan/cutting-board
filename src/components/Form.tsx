import React, { type ChangeEvent, type FC, type FormEvent, useCallback, useState } from 'react'
import Input from './Input'
import { LabelTitle, type FormData } from '../helpers/types'
import Button from './Button'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import { boardListsAdd } from '../store/actions/board'

const generateRandomColor = (): string => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
const Form: FC = () => {
  const dispatch = useDispatch()
  const usedColors: string[] = []
  const [formData, setFormData] = useState<FormData>({
    width: '',
    height: '',
    quantity: ''
  })
  const handleAddItem = useCallback(
    (event: FormEvent): void => {
      event.preventDefault()
      let randomColor = generateRandomColor()
      while (usedColors.includes(randomColor)) {
        randomColor = generateRandomColor()
      }
      usedColors.push(randomColor)
      dispatch(
        boardListsAdd({
          ...formData,
          id: _.uniqueId(),
          changed: false,
          color: randomColor
        })
      )
      setFormData({ width: '', height: '', quantity: '' })
    },
    [formData, dispatch, usedColors]
  )

  const handleChange = useCallback((key: string) => (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [key]: event.target.value })
  }, [formData])
  return (
        <div className='form-container'>
            <form className='form'>
                <Input
                    required={true}
                    value={formData.width}
                    handleChange={handleChange}
                    labelTitle={LabelTitle.Width}
                />
                <Input
                    required={true}
                    value={formData.height}
                    handleChange={handleChange}
                    labelTitle={LabelTitle.Height}
                />
                <Input
                    required={true}
                    value={formData.quantity}
                    handleChange={handleChange}
                    labelTitle={LabelTitle.Quantity}
                />
                <Button
                    onAddData={handleAddItem}
                    title='Add'
                    className='form__button'
                    type='submit'
                />
            </form>
        </div>
  )
}
export default Form
