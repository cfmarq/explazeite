import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';
import { Link } from 'react-router-dom';

const items = [
  {
    src: '/public/images/destaques/latas1.png',
    altText: '',
    caption: ''
  },
  {
    src: '/public/images/destaques/latas2.png',
  }
];

const FeaturedItem3 = () => {
  return (

    <div className="center-container container">
      <div className="col-md-12">
        <h1><FormattedMessage id="featured.item3.label" /><br/>//</h1>
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
            <a href="https://www.facebook.com/explazeite/" target="_blank">
              <img className="social_ico" src="/public/images/fb_ico.png" height="35px" />
            </a>
            <a href="https://www.instagram.com/explazeite/" target="_blank">
              <img className="social_ico" src="/public/images/insta_ico.png" height="35px" />
            </a>
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
          <FormattedMessage id="featured.item3.subtitle" />
        </h2>
        <p><FormattedMessage id="featured.item3.p1" /></p>
        <p><FormattedMessage id="featured.item3.p2" /></p>
        <p><FormattedMessage id="featured.item3.p3" /></p>
        <p><FormattedMessage id="featured.item3.p4" /></p>
        <p><FormattedMessage id="featured.item3.p5" /></p>
        <p><FormattedMessage id="featured.item3.p6" /></p>
      </div>

    </div>
  )
}

export default FeaturedItem3;
