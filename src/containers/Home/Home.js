import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import {home} from './../../constants'

const Home = () =>
  <div className="center-container">
    <UncontrolledCarousel className="home-carousel hidden-xs" items={home.items} pause="false" />
    <UncontrolledCarousel className="home-carousel visible-xs" items={home.items_mobile} pause="false" />
  </div>;

export default Home;
