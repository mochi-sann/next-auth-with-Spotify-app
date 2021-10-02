import { atom } from 'recoil'

export const ActiveDeveice = atom({
  key: 'ActiveDeveice', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})
