import React, { type FC } from 'react'
import { type ListItem } from '../helpers/types'
import BoxDimensions from './BoxDimensions'

type BoxProps = ListItem

const Box: FC<BoxProps> = ({ width, height, quantity, color, extraFields }: BoxProps) => {
  return <>
        {Array.from({ length: +quantity }, (_, index) => (
            <div
                key={index}
                style={{
                  width: `${(+width / 2.4)}px`,
                  height: `${(+height / 2.4)}px`,
                  backgroundColor: color,
                  border: '1px solid #FFFFFFA5',
                  opacity: 0.6,
                  position: 'relative',
                  ...extraFields
                }}
            >
              <BoxDimensions isHeight={false} top='0px' right='5px' dimensions={width}/>
              <BoxDimensions isHeight={true} bottom='10px' left='0px' dimensions={height}/>
            </div>
        ))}
    </>
}

export default Box
