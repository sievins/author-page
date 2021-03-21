import React from 'react'
import PropTypes from 'prop-types'
import PageWithAvatar from '../page-with-avatar'
import Corners from './corners'

const tabPropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  activeIndex: PropTypes.number.isRequired,
}).isRequired

Home.propTypes = {
  tabs: PropTypes.shape({
    christianBooks: tabPropType,
    fantasyBooks: tabPropType,
  }).isRequired,
  setActiveTab: PropTypes.func.isRequired,
}

export default function Home({ tabs, setActiveTab }) {
  return (
    <PageWithAvatar>
      <Corners tabs={tabs} setActiveTab={setActiveTab} />
    </PageWithAvatar>
  )
}
