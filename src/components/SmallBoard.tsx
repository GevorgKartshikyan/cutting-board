import React, { type FC } from 'react'
import { type SmallBoardProps } from '../helpers/types'

const SmallBoard: FC<SmallBoardProps> = ({ backgroundImage, isSelected, selectColor }) => {
  return (
        <div
            onClick={() => { selectColor(backgroundImage) }}
            className={`small-board ${isSelected ? 'selected' : ''}`}
            style={{ backgroundImage }}
        />
  )
}

export default SmallBoard
