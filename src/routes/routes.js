import React from "react";
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
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default function Routes({ tabs, activeTab, setActiveTab }) {
  return tabs.home.activeIndex === activeTab ? (
    <Home setActiveTab={setActiveTab} tabs={tabs} />
  ) : tabs.christianBooks.activeIndex === activeTab ? (
    <ChristianBooks />
  ) : tabs.fantasyBooks.activeIndex === activeTab ? (
    <FantasyBooks />
  ) : tabs.aboutAlice.activeIndex === activeTab ? (
    <AboutAlice />
  ) : (
    <Home setActiveTab={setActiveTab} tabs={tabs} />
  );
}
