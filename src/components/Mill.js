import React, { Component } from 'react';
import { UncontrolledCarousel, Row, Col } from 'reactstrap';
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

const Mill = () => {
  return (
    <div className="center-container container">
      <Row>
        <Col xs="12" sm="12" md="6">
          <div className="left-box">
            <h1><FormattedMessage id="mill.title" /><br/>//</h1>
            <p><FormattedMessage id="mill.p1" /></p>
            <p><FormattedMessage id="mill.p2" /></p>
            <p><FormattedMessage id="mill.p3" /></p>
            <p><FormattedMessage id="mill.p4" /></p>
          </div>
        </Col>
        <Col sm="12" md="6" className="hidden-xs">
          <div className="no-padding" id="lagar">
            <img className="right-box" src="/public/images/lagar/olival.png" alt="" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="12" md="12">
          <UncontrolledCarousel items={items} pause="false" />
        </Col>
      </Row>
    </div>
  )
}

export default Mill;
