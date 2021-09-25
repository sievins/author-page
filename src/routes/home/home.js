import React from "react";
import PropTypes from "prop-types";
import { PageWithAvatar } from "../components";
import Corners from "./corners";

const tabPropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  activeIndex: PropTypes.number.isRequired,
}).isRequired;

Home.propTypes = {
  tabs: PropTypes.shape({
    christianBooks: tabPropType,
    fantasyBooks: tabPropType,
  }).isRequired,
};

export default function Home({ tabs }) {
  return (
    <PageWithAvatar>
      <Corners tabs={tabs} />
    </PageWithAvatar>
  );
}
