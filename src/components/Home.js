import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '/public/images/carousel/carousel-1.png',
    altText: '',
    caption: ''
  },
  {
    src: '/public/images/carousel/carousel-2.png',
  },
  {
    src: '/public/images/carousel/carousel-3.png',
  },
  {
    src: '/public/images/carousel/carousel-4.png',
  },
  {
    src: '/public/images/carousel/carousel-5.png',
  }
];


const Home = () => <div className="center-container"><UncontrolledCarousel className="home-carousel" items={items} pause="false" /></div>;

export default Home;
