import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const items = [
  {
    src: '/public/images/lagar/lagar_1.png',
    altText: '',
    caption: ''
  },
  {
    src: '/public/images/lagar/lagar_2.png',
  },
  {
    src: '/public/images/lagar/lagar_3.png',
  }
];


const Cellar = () => {
  return (

    <div className="center-container container">
      <div className="col-md-12 box-container">
        <div className="col-sm-12 col-md-6 left-box">
          <h1><FormattedMessage id="cellar.title" /><br/>//</h1>
          <p><FormattedMessage id="cellar.p1" /></p>
          <p><FormattedMessage id="cellar.p2" /></p>
          <p><FormattedMessage id="cellar.p3" /></p>
          <p><FormattedMessage id="cellar.p4" /></p>
        </div>
        <div className="hidden-xs hidden-sm col-md-6 no-padding" id="lagar">
          <img className="right-box" src="/public/images/lagar/olival.png" alt="" />
        </div>
      </div>

      <UncontrolledCarousel items={items} pause="false" />

    </div>
  )
}

export default Cellar;
