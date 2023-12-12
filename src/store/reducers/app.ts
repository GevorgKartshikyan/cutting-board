import { createReducer, type PayloadAction } from '@reduxjs/toolkit'
import { type BigBoardColor } from '../../helpers/types'
import { selectBigBoardColor } from '../actions/app'
import boardBgAcacia from '../../asstest/images/board-acacia.jpg'

interface BoardState {
  color: string
}

const initialState: BoardState = {
  color: `url(${boardBgAcacia})`
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(selectBigBoardColor, (state, action: PayloadAction<BigBoardColor>) => {
      state.color = action.payload.color
    })
})
