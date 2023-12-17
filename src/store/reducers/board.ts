import { createReducer, type PayloadAction } from '@reduxjs/toolkit'
import { boardListsAdd, openForChange, deleteBoard, saveChanges, changeExtraFields } from '../actions/board'
import { type ChangeFields, type DeleteBoard, type extraFields, type ListItem } from '../../helpers/types'

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
      const { id } = action.payload
      state.list = state.list.filter((e) => e.id !== id)
    })
    .addCase(openForChange, (state, action: PayloadAction<DeleteBoard>) => {
      const { id } = action.payload
      state.list = state.list.map((e) => {
        if (e.id === id) {
          e.changed = !e.changed
        }
        return e
      })
    })
    .addCase(saveChanges, (state, action: PayloadAction<ChangeFields>) => {
      const { id, width, height, quantity } = action.payload
      state.list = state.list.map((e) => {
        if (e.id === id) {
          e.width = +width
          e.height = +height
          e.quantity = +quantity
        }
        return e
      })
    })
    .addCase(changeExtraFields, (state, action: PayloadAction<extraFields>) => {
      const {
        id,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomRightRadius,
        borderBottomLeftRadius
      } = action.payload
      state.list = state.list.map((e) => {
        if (e.id === id) {
          e.extraFields = {
            borderTopLeftRadius: (parseFloat(borderTopLeftRadius) / 2.4) + 'px',
            borderTopRightRadius: (parseFloat(borderTopRightRadius) / 2.4) + 'px',
            borderBottomRightRadius: (parseFloat(borderBottomRightRadius) / 2.4) + 'px',
            borderBottomLeftRadius: (parseFloat(borderBottomLeftRadius) / 2.4) + 'px'
          }
        }
        return e
      })
    })
})
