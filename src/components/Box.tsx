import React, { type FC } from 'react'
import { type BoxProps } from '../helpers/types'
import BoxDimensions from './BoxDimensions'

const Box: FC<BoxProps> = ({ width, height, color, extraFields, left, top }: BoxProps) => {
  return (
        <>
            <div
                style={{
                  left,
                  top,
                  width: `${(+width / 2.4)}px`,
                  height: `${(+height / 2.4) - 1}px`,
                  backgroundColor: color,
                  border: '0.1px solid #FFFFFFA5',
                  opacity: 0.6,
                  position: 'absolute',
                  ...extraFields
                }}
            >
              <BoxDimensions fontSize='14px' isHeight={false} top='0px' right='5px' dimensions={width}/>
              <BoxDimensions fontSize='14px' isHeight={true} bottom='5px' left='0px' dimensions={height}/>
            </div>
    </>
  )
}

export default Box
