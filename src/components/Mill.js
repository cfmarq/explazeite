import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const items = [
  {
    src: '/public/images/adega/adega_1.png',
    altText: '',
    caption: ''
  },
  {
    src: '/public/images/adega/adega_2.png',
  },
  {
    src: '/public/images/adega/adega_3.png',
  },
  {
    src: '/public/images/adega/adega_4.png',
  }
];


const Mill = () => {
  return (

    <div className="center-container container">
      <div className="col-md-12 box-container">
        <div className="col-sm-12 col-md-6 left-box">
          <h1><FormattedMessage id="mill.title" /><br/>//</h1>
          <p><FormattedMessage id="mill.p1" /></p>
          <p><FormattedMessage id="mill.p2" /></p>
          <p><FormattedMessage id="mill.p3" /></p>
          <p><FormattedMessage id="mill.p4" /></p>
        </div>
        <div className="hidden-xs hidden-sm col-md-6 no-padding" id="adega">
          <img className="right-box" src="/public/images/adega/vinha.png" alt="" />
        </div>
      </div>

      <UncontrolledCarousel items={items} pause="false" />

    </div>
  )
}

export default Mill;
