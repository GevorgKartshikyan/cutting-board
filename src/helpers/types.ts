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
  labelTitle: string
  handleChange: (key: string) => (ev: ChangeEvent<HTMLInputElement>) => void
  value: string
  required: boolean
  field: string
  placeholder: string
}
export type ButtonTypes = 'submit' | 'button' | 'reset'

export interface ButtonProps {
  title: string
  className: string
  type: ButtonTypes
  onAddData: (event: FormEvent) => void
}
export interface ListItem {
  width: number
  height: number
  quantity: number
  id: string
  color: string
  changed: boolean
  extraFields?: Record<string, string>
}
export interface BoxProps {
  width: number
  height: number
  id: string
  color: string
  extraFields?: Record<string, string>
  left: number
  top: number
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
  value: number
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
export interface BoxDimensionsProps {
  top?: string
  right?: string
  dimensions: number
  bottom?: string
  left?: string
  isHeight: boolean
  fontSize?: string
}
export interface Box {
  x: number
  y: number
  width: number
  height: number
  color: string
}

export interface SmallBox {
  width: number
  height: number
  quantity: number
  color: string
}
