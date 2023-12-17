import React, { type FC } from 'react'
import boardBgAcacia from '../asstest/images/board-acacia.jpg'
import boardBgAlpine from '../asstest/images/board-alpine.jpg'
import boardBgOak from '../asstest/images/board-oak.jpg'
import boardBgAruba from '../asstest/images/board-aruba.jpg'
import SmallBoard from './SmallBoard'
import { useDispatch, useSelector } from 'react-redux'
import { type BigBoardColor } from '../helpers/types'
import { selectBigBoardColor } from '../store/actions/app'
import { useTranslation } from 'react-i18next'

const SelectBoard: FC = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const colors = [boardBgAlpine, boardBgAcacia, boardBgOak, boardBgAruba]
  const boardColor = useSelector((state: { app: BigBoardColor }) => state.app.color)
  const handleSelectColor = (color: string): void => {
    dispatch(selectBigBoardColor({ color }))
  }
  return (
        <div className='select-board'>
            <h1>{t('select_title')}</h1>
            <div className='select-board-block'>
                {colors.map((e) => (
                    <SmallBoard
                        selectColor={handleSelectColor}
                        key={e}
                        backgroundImage={`url(${e})`}
                        isSelected={boardColor === `url(${e})`}
                    />
                ))}
            </div>
        </div>
  )
}

export default SelectBoard
