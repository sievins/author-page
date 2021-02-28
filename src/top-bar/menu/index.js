import React from 'react'
import Menu from './menu'
import MenuMobile from './menu-mobile'
import { useScreenSize } from '../../hooks'

export default function MenuWrapper(props) {
  const { isExtraSmallScreen } = useScreenSize()

  return isExtraSmallScreen
    ? <MenuMobile {...props} />
    : <Menu {...props} />
}
