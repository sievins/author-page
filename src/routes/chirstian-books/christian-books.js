import React from 'react'
import Underlay from '../underlay'
import SpotlightedBook from './spotlighted-book'
import cover from '../../assets/images/covers/feathers-of-snow.jpg'

export default function ChristianBooks() {
  return (
    <Underlay>
      <SpotlightedBook coverSrc={cover} title="feathers of snow" />
      <div style={{ marginBottom: 1000 }} />
    </Underlay>
  )
}
