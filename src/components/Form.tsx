import React, { type ChangeEvent, type FC, type FormEvent, useCallback, useState } from 'react'
import Input from './Input'
import { type FormData } from '../helpers/types'
import Button from './Button'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import { boardListsAdd } from '../store/actions/board'
import { useTranslation } from 'react-i18next'

const generateRandomColor = (): string => {
  const letters: '0123456789ABCDEF' = '0123456789ABCDEF'
  const hexCodeFormat: number = 6
  let color: string = '#'
  for (let i: number = 0; i < hexCodeFormat; i++) {
    color += letters[Math.floor(Math.random() * letters.length)]
  }
  return color
}
const Form: FC = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const usedColors: string[] = []
  const [formData, setFormData] = useState<FormData>({
    width: '',
    height: '',
    quantity: ''
  })
  const [error, setError] = useState('')
  const handleAddItem = useCallback(
    (event: FormEvent): void => {
      event.preventDefault()
      let randomColor = generateRandomColor()
      while (usedColors.includes(randomColor)) {
        randomColor = generateRandomColor()
      }
      usedColors.push(randomColor)
      if ((formData.width !== '') && (formData.height !== '') && (formData.quantity !== '')) {
        dispatch(
          boardListsAdd({
            width: +formData.width,
            quantity: +formData.quantity,
            height: +formData.height,
            id: _.uniqueId(),
            changed: false,
            color: randomColor
          })
        )
        setFormData({ width: '', height: '', quantity: '' })
      } else {
        setError(t('error'))
      }
    },
    [formData, dispatch, usedColors]
  )

  const handleChange = useCallback((key: string) => (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [key]: event.target.value })
    setError('')
  }, [formData])
  return (
        <div className='form-container'>
            <form className='form'>
                <Input
                    placeholder={t('placeholder_width')}
                    field='width'
                    required={true}
                    value={formData.width}
                    handleChange={handleChange}
                    labelTitle={t('width')}
                />
                <Input
                    placeholder={t('placeholder_height')}
                    field='height'
                    required={true}
                    value={formData.height}
                    handleChange={handleChange}
                    labelTitle={t('height')}
                />
                <Input
                    placeholder={t('placeholder_quantity')}
                    field='quantity'
                    required={true}
                    value={formData.quantity}
                    handleChange={handleChange}
                    labelTitle={t('quantity')}
                />
                {(error !== '') && <p className='error-message'>{error}</p>}
                <Button
                    onAddData={handleAddItem}
                    title={t('add')}
                    className='form__button'
                    type='submit'
                />
            </form>
        </div>
  )
}
export default Form
