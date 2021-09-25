import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./home";
import ChristianBooks from "./chirstian-books";
import FantasyBooks from "./fantasy-books";
import AboutAlice from "./about-alice";

const tabPropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  activeIndex: PropTypes.number.isRequired,
}).isRequired;

Routes.propTypes = {
  tabs: PropTypes.shape({
    home: tabPropType,
    aboutAlice: tabPropType,
  }).isRequired,
};

export default function Routes({ tabs }) {
  const location = useLocation();
  const path = location.hash;

  return tabs.home.path === path ? (
    <Home tabs={tabs} />
  ) : tabs.christianBooks.path === path ? (
    <ChristianBooks />
  ) : tabs.fantasyBooks.path === path ? (
    <FantasyBooks />
  ) : tabs.aboutAlice.path === path ? (
    <AboutAlice />
  ) : (
    <Home tabs={tabs} />
  );
}
