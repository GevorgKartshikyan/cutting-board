import React, { type FC } from 'react'
import { type BoxProps } from '../helpers/types'
import BoxDimensions from './BoxDimensions'

const Box: FC<BoxProps> = ({ width, height, color, extraFields, left, top }: BoxProps) => {
  return <>
            <div
                style={{
                  left,
                  top,
                  width: `${(+width / 2.4)}px`,
                  height: `${(+height / 2.4)}px`,
                  backgroundColor: color,
                  border: '1px solid #FFFFFFA5',
                  opacity: 0.6,
                  position: 'absolute',
                  ...extraFields
                }}
            >
              <BoxDimensions isHeight={false} top='0px' right='5px' dimensions={width}/>
              <BoxDimensions isHeight={true} bottom='10px' left='0px' dimensions={height}/>
            </div>
    </>
}

export default Box
