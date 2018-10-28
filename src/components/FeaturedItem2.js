import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';
import { UncontrolledCarousel, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const items = [
  {
    src: '/public/images/destaques/vinha.png',
    altText: '',
    caption: ''
  }
];

const FeaturedItem2 = () => {
  return (

    <div className="center-container container">
      <Row>
        <Col xs="12" sm="12" md="12">
          <div className="no-padding">
            <h1><FormattedMessage id="featured.item2.label" /></h1>
            <h3>//</h3>
            <br/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="8" md="8">
          <div className="featured-item__inner-box">
            <UncontrolledCarousel items={items} pause="false" />
          </div>
        </Col>
        <Col xs="12" sm="4" md="4">
          <div className="featured__inner-box">
            <div className="featured-borderbox">
              <div>
                <h3><FormattedMessage id="featured.item.social" /></h3>
              </div>
              <div>
                <a href="https://www.facebook.com/explazeite/" target="_blank">
                  <img className="social_ico" src="/public/images/fb_ico.png" height="35px" />
                </a>
                <a href="https://www.instagram.com/explazeite/" target="_blank">
                  <img className="social_ico" src="/public/images/insta_ico.png" height="35px" />
                </a>
              </div>
            </div>
            <div>
              <Link to="/featured">
                <Button className="btn-gold featured-btn">
                  <FormattedMessage id="buttons.back" />
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="12" md="12">
          <div className="featured-item__description">
            <h2 className="subheader">
              <FormattedMessage id="featured.item2.subtitle" />
            </h2>
            <p><FormattedMessage id="featured.item2.p1" /></p>
            <p><FormattedMessage id="featured.item2.p2" /></p>
            <p><FormattedMessage id="featured.item2.p3" /></p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default FeaturedItem2;
