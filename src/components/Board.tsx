import React, { type FC } from 'react'
import { height, width } from '../helpers/constants'
import { useSelector } from 'react-redux'
import { type BigBoardColor, type ListItem } from '../helpers/types'
import packBoxes from '../helpers/packBoxes'
import duplicateBoxes from '../helpers/duplicateBoxes'
import Box from './Box'
import BoxDimensions from './BoxDimensions'

const Board: FC = () => {
  const boardColor = useSelector((state: { app: BigBoardColor }) => state.app.color)
  const boardList = useSelector((state: { board: { list: ListItem[] } }) => state.board.list)
  const boards = packBoxes(width, height, duplicateBoxes(boardList))
  return (
        <div className='board-container'>
          {boards.length > 0
            ? boards.map((e, index) => (
              <div key={index}
                   style={{
                     position: 'relative',
                     width: width / 2.4,
                     height: height / 2.4,
                     border: '1px solid black',
                     background: boardColor,
                     marginBottom: 50
                   }}
              >
                {e.placedBoxes.map((box: any) => (
                    <Box
                        left={box.x / 2.4}
                        top={box.y / 2.4}
                        key={box.id}
                        width={box.width}
                        height={box.height}
                        id={box.id}
                        color={box.color}
                        extraFields={box.extraFields}
                    />
                ))}
                <BoxDimensions fontSize='24px' isHeight={false} top='-40px' right='50%' dimensions={width}/>
                <BoxDimensions fontSize='24px' isHeight={true} bottom='50%' left='-50px' dimensions={height}/>
              </div>
            ))
            : (<div
                    style={{
                      position: 'relative',
                      width: width / 2.4,
                      height: height / 2.4,
                      border: '1px solid black',
                      background: boardColor,
                      marginBottom: 50
                    }}
              >
                <BoxDimensions fontSize='24px' isHeight={false} top='-40px' right='50%' dimensions={width}/>
                <BoxDimensions fontSize='24px' isHeight={true} bottom='50%' left='-50px' dimensions={height}/>
              </div>) }
        </div>
  )
}

export default Board
