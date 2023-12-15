import { createAction } from '@reduxjs/toolkit'
import { type ChangeFields, type DeleteBoard, type ListItem } from '../../helpers/types'

export const boardListsAdd = createAction<ListItem>('board/boardListsAdd')
export const deleteBoard = createAction<DeleteBoard>('board/deleteBoard')
export const openForChange = createAction<DeleteBoard>('board/openForChange')
export const saveChanges = createAction<ChangeFields>('board/saveChanges')
