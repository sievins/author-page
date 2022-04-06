import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./home";
import ChristianBooks from "./chirstian-books";
import FantasyBooks from "./fantasy-books";
import AboutAlice from "./about-alice";
import { FeathersOfSnowSynopsis } from "./synopses";
import { FeathersOfBloodSynopsis } from "./synopses";

const tabPropType = PropTypes.shape({
  path: PropTypes.string.isRequired,
}).isRequired;

Routes.propTypes = {
  tabs: PropTypes.shape({
    home: tabPropType,
    christianBooks: tabPropType,
    fantasyBooks: tabPropType,
    aboutAlice: tabPropType,
    feathersOfSnowSynopsis: tabPropType,
    feathersOfBloodSynopsis: tabPropType,
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
    <FantasyBooks tabs={tabs} />
  ) : tabs.aboutAlice.path === path ? (
    <AboutAlice />
  ) : tabs.feathersOfSnowSynopsis.path === path ? (
    <FeathersOfSnowSynopsis />
  ) : tabs.feathersOfBloodSynopsis.path === path ? (
    <FeathersOfBloodSynopsis />
  ) : (
    <Home tabs={tabs} />
  );
}
