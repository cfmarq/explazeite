import React, { Component } from 'react';
import { UncontrolledCarousel, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const items = [
  {
    src: '/public/images/adega/default/adega-1.png',
    altText: '',
    caption: ''
  },
  {
    src: '/public/images/adega/default/adega-2.png',
  },
  {
    src: '/public/images/adega/default/adega-3.png',
  },
  {
    src: '/public/images/adega/default/adega-4.png',
  }
];

const items_mobile = [
  {
    src: '/public/images/adega/mobile/adega-1.png',
    altText: '',
    caption: ''
  },
  {
    src: '/public/images/adega/mobile/adega-2.png',
  },
  {
    src: '/public/images/adega/mobile/adega-3.png',
  }
];

class Cellar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="center-container container">
        <Row>
          <Col xs="12" sm="12" md="6">
            <div className="left-box">
              <h1><FormattedMessage id="cellar.title" /><br/>//</h1>
              <p><FormattedMessage id="cellar.p1" /></p>
              <p><FormattedMessage id="cellar.p2" /></p>
              <p><FormattedMessage id="cellar.p3" /></p>
              <p><FormattedMessage id="cellar.p4" /></p>
            </div>
          </Col>
          <Col sm="12" md="6" className="hidden-xs">
            <div className="no-padding" id="lagar">
              <img className="right-box" src="/public/images/adega/vinha.png" alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="12">
            <UncontrolledCarousel className="hidden-xs" items={items} pause="false" />
            <UncontrolledCarousel className="visible-xs" items={items_mobile} pause="false" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Cellar;
