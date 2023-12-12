import React, { type FC } from 'react'
import { height, width } from '../helpers/constants'
import { useSelector } from 'react-redux'
import { type BigBoardColor, type ListItem } from '../helpers/types'
import Box from './Box'

const Board: FC = () => {
  const boardColor = useSelector((state: { app: BigBoardColor }) => state.app.color)
  const boardList = useSelector((state: { board: { list: ListItem[] } }) => state.board.list)
  return (
        <div className='board-container'>
            <div
                style={{
                  backgroundImage: boardColor,
                  width: (width / 2.4) + 'px',
                  height: (height / 2.4) + 'px'
                }}
                className='big-board'
            >
                {boardList.map((e) => (
                    <Box key={e.id} {...e}/>
                ))}
            </div>
        </div>
  )
}
export default Board
