import { createAction } from '@reduxjs/toolkit'
import { type DeleteBoard, type ListItem } from '../../helpers/types'

export const boardListsAdd = createAction<ListItem>('board/boardListsAdd')
export const deleteBoard = createAction<DeleteBoard>('board/deleteBoard')
export const openForChange = createAction<DeleteBoard>('board/openForChange')
