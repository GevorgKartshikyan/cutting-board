import { createAction } from '@reduxjs/toolkit'
import { type BigBoardColor } from '../../helpers/types'

export const selectBigBoardColor = createAction<BigBoardColor>('app/selectBigBoardColor')
