import React, { type FC } from 'react'
import { type BoxDimensionsProps } from '../helpers/types'

const BoxDimensions: FC<BoxDimensionsProps> = ({ dimensions, top, right, bottom, left, isHeight, fontSize = '14px' }) => {
  return (
        <p style={{
          top,
          right,
          position: 'absolute',
          bottom,
          left,
          transform: isHeight === true ? 'rotate(90deg)' : 'rotate(0deg)',
          zIndex: 1,
          fontSize
        }}>
            {dimensions}
        </p>
  )
}
export default BoxDimensions
