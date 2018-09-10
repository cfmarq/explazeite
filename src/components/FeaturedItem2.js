import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';
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
      <div className="col-md-12">
        <h1><FormattedMessage id="featured.item2.label" /><br/>//</h1>
      </div>

      <div className="col-xs-12 col-sm-8 col-md-8 featured-item__outer-box">
        <div className="featured-item__inner-box">
          <UncontrolledCarousel items={items} pause="false" />
        </div>
      </div>

      <div className="col-xs-12 col-sm-4 col-md-4 featured-item__outer-box featured-item__right">
        <div className="featured__inner-box">
          <div>
            <h3><FormattedMessage id="featured.item.social" /></h3>
          </div>
          <div>
            <img className="social_ico" src="/public/images/fb_ico.png" height="35px" />
            <img className="social_ico" src="/public/images/insta_ico.png" height="35px" />
          </div>
          <div>
            <Link to="/featured">
              <Button className="btn-gold">
                <FormattedMessage id="buttons.back" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-8 col-md-8 featured-item__description">
        <h2 className="subheader">
          <FormattedMessage id="featured.item2.subtitle" />
        </h2>
        <p><FormattedMessage id="featured.item2.p1" /></p>
        <p><FormattedMessage id="featured.item2.p2" /></p>
        <p><FormattedMessage id="featured.item2.p3" /></p>
      </div>

    </div>
  )
}

export default FeaturedItem2;
