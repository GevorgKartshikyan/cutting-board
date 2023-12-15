import { type ChangeEvent, type FormEvent } from 'react'

export enum LabelTitle {
  Width = 'Width',
  Height = 'Height',
  Quantity = 'Quantity',
}

export interface FormData {
  width: string
  height: string
  quantity: string
}

export type ValidLabelTitles = 'Width' | 'Height' | 'Quantity'

export interface InputProps {
  labelTitle: ValidLabelTitles
  handleChange: (key: string) => (ev: ChangeEvent<HTMLInputElement>) => void
  value: string
  required: boolean
}
export type ButtonTypes = 'submit' | 'button' | 'reset'

export interface ButtonProps {
  title: string
  className: string
  type: ButtonTypes
  onAddData: (event: FormEvent) => void
}
export interface ListItem {
  id: string
  height: string
  width: string
  quantity: string
  changed: boolean
  color: string
  extraFields?: {
    borderTopLeftRadius: string
    borderTopRightRadius: string
    borderBottomLeftRadius: string
    borderBottomRightRadius: string
  }
}
export interface extraFields {
  id: string
  borderTopLeftRadius: string
  borderTopRightRadius: string
  borderBottomLeftRadius: string
  borderBottomRightRadius: string
}
export interface DeleteBoard {
  id: string
}

export interface InputForEditProps {
  value: string
  disabled: boolean
  field: string
  onChange: (key: string) => (ev: ChangeEvent<HTMLInputElement>) => void

}
export interface BigBoardColor {
  color: string
}
export interface SmallBoardProps {
  backgroundImage: string
  isSelected: boolean
  selectColor: (color: string) => void
}
export interface ChangeFields {
  width: string
  height: string
  quantity: string
  id: string
}
export interface BoardFieldsModalProps {
  id: string
  onCloseModal: () => void
}
