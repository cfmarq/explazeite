import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '/public/images/carousel/carousel1.png',
    altText: '',
    caption: ''
  },
  {
    src: '/public/images/carousel/carousel2.png',
  },
  {
    src: '/public/images/carousel/carousel3.png',
  },
  {
    src: '/public/images/carousel/carousel4.png',
  }
];


const Home = () => <div className="center-container"><UncontrolledCarousel items={items} pause="false" /></div>;

export default Home;
