import React, { type FC } from 'react'
import { type ListItem } from '../helpers/types'

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
                  ...extraFields
                }}
            ></div>
        ))}
    </>
}

export default Box
