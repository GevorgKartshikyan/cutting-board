import { createReducer, type PayloadAction } from '@reduxjs/toolkit'
import { boardListsAdd, openForChange, deleteBoard } from '../actions/board'
import { type DeleteBoard, type ListItem } from '../../helpers/types'

interface BoardState {
  list: ListItem[]
}

const initialState: BoardState = {
  list: []
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(boardListsAdd, (state, action: PayloadAction<ListItem>) => {
      state.list = [...state.list, action.payload]
    })
    .addCase(deleteBoard, (state, action: PayloadAction<DeleteBoard>) => {
      state.list = state.list.filter((e) => e.id !== action.payload.id)
    })
    .addCase(openForChange, (state, action: PayloadAction<DeleteBoard>) => {
      state.list = state.list.map((e) => {
        if (e.id === action.payload.id) {
          e.changed = !e.changed
        }
        return e
      })
    })
})
