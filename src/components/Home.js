import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '/public/images/carousel/default/carousel-1.png',
    altText: '',
    caption: ''
  },
  {
    src: '/public/images/carousel/default/carousel-3.png',
  },
  {
    src: '/public/images/carousel/default/carousel-4.png',
  },
  {
    src: '/public/images/carousel/default/carousel-5.png',
  }
];

const items_mobile = [
  {
    src: '/public/images/carousel/mobile/carousel-1.png',
    altText: '',
    caption: ''
  },
  {
    src: '/public/images/carousel/mobile/carousel-2.png',
  },
  {
    src: '/public/images/carousel/mobile/carousel-3.png',
  },
  {
    src: '/public/images/carousel/mobile/carousel-4.png',
  },
  {
    src: '/public/images/carousel/mobile/carousel-5.png',
  }
];


const Home = () =>
  <div className="center-container">
    <UncontrolledCarousel className="home-carousel hidden-xs" items={items} pause="false" />
    <UncontrolledCarousel className="home-carousel visible-xs" items={items_mobile} pause="false" />
  </div>;

export default Home;
