import React, { type FC } from 'react'
import { type ButtonProps } from '../helpers/types'

const Button: FC<ButtonProps> = ({ className, title, type, onAddData }) => {
  return (
        <button
            type={type}
            className={className}
            onClick={onAddData}
        >
            {title}
        </button>
  )
}
export default Button
