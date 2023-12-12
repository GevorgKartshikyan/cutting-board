import React, { type FC } from 'react'
import { type InputForEditProps } from '../helpers/types'

const InputForEdit: FC<InputForEditProps> = ({ value, disabled, field, onChange }) => {
  return (
        <input
            disabled={disabled}
            className={`form__input edit ${disabled ? 'disable' : ''}`}
            defaultValue={value}
            onChange={onChange(field)}
        />

  )
}
export default InputForEdit
