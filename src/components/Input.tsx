import React, { type FC } from 'react'

import { type InputProps } from '../helpers/types'

const Input: FC<InputProps> = ({ labelTitle, handleChange, value, required }) => {
  return (
        <div>
            <label className="form__label" htmlFor="width">{labelTitle}:</label>
            <input
                required={required}
                onChange={handleChange(labelTitle.toLocaleLowerCase())}
                className="form__input"
                type="number"
                id={labelTitle.toLowerCase()}
                name={labelTitle.toLowerCase()}
                value={value}
                placeholder={`Enter ${labelTitle.toLowerCase()}`}
            />
        </div>
  )
}
export default Input
