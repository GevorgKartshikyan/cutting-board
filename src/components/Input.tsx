import React, { type FC } from 'react'

import { type InputProps } from '../helpers/types'

const Input: FC<InputProps> = ({ labelTitle, handleChange, value, required, field, placeholder }) => {
  return (
        <div>
            <label className="form__label">{labelTitle}:</label>
            <input
                required={required}
                onChange={handleChange(field)}
                className="form__input"
                type="number"
                id={labelTitle.toLowerCase()}
                name={labelTitle.toLowerCase()}
                value={value}
                placeholder={placeholder}
            />
        </div>
  )
}
export default Input
