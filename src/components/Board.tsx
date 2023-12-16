import React, { type FC } from 'react'
import { height, width } from '../helpers/constants'
import { useSelector } from 'react-redux'
import { type BigBoardColor, type ListItem } from '../helpers/types'
// import packBoxes from '../helpers/packBoxes'
import Box from './Box'
import BoxDimensions from './BoxDimensions'

const Board: FC = () => {
  const boardColor = useSelector((state: { app: BigBoardColor }) => state.app.color)
  const boardList = useSelector((state: { board: { list: ListItem[] } }) => state.board.list)
  // const placedBoxes = packBoxes(width / 2.4, height / 2.4, boardList)

  return (
        <div className='board-container'>
            <div style={{
              position: 'relative',
              width: width / 2.4,
              height: height / 2.4,
              border: '1px solid black',
              background: boardColor
            }}>
                <BoxDimensions fontSize='24px' isHeight={false} top='-50px' right='50%' dimensions={width}/>
                <BoxDimensions fontSize='24px' isHeight={true} bottom='50%' left='-50px' dimensions={height}/>
                {boardList.map((e) => (
                    <Box
                        key={e.id}
                         width={e.width}
                         height={e.height}
                         quantity={e.quantity}
                         id={e.id}
                         color={e.color}
                         changed={e.changed}/>
                ))}
            </div>
        </div>
  )
}

export default Board
