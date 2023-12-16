import React, { type FC } from 'react'
import { height, width } from '../helpers/constants'
import { useSelector } from 'react-redux'
import { type BigBoardColor, type ListItem } from '../helpers/types'
import packBoxes from '../helpers/packBoxes'

const Board: FC = () => {
  const boardColor = useSelector((state: { app: BigBoardColor }) => state.app.color)
  const boardList = useSelector((state: { board: { list: ListItem[] } }) => state.board.list)
  const placedBoxes = packBoxes(width / 2.4, height / 2.4, boardList)

  return (
        <div>
            <div style={{ position: 'relative', width: width / 2.4, height: height / 2.4, border: '1px solid black', background: boardColor }}>
                {placedBoxes.map((box, index) => (
                    <div
                        key={index} // Используем уникальный идентификатор в качестве ключа
                        style={{
                          position: 'absolute',
                          left: box.x / 2.4,
                          top: box.y / 2.4,
                          width: box.width / 2.4,
                          height: box.height / 2.4,
                          backgroundColor: box.color,
                          border: '1px solid #000'
                        }}
                    ></div>
                ))}
            </div>
        </div>
  )
}

export default Board
