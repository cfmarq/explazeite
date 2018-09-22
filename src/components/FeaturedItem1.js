import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';
import { Link } from 'react-router-dom';

const items = [
  {
    src: '/public/images/destaques/nova_imagem.png',
    altText: '',
    caption: ''
  },
  {
    src: '/public/images/destaques/nova_imagem_2.png',
  }
];

const FeaturedItem1 = () => {
  return (

    <div className="center-container container">
      <div className="col-md-12 no-padding">
        <h1><FormattedMessage id="featured.item1.label" /></h1>
        <h3>//</h3>
        <br/>
      </div>

      <div className="col-xs-12 col-sm-8 col-md-8 featured-item__outer-box no-padding">
        <div className="featured-item__inner-box">
          <UncontrolledCarousel items={items} pause="false" />
        </div>
      </div>

      <div className="col-xs-12 col-sm-4 col-md-4 featured-item__outer-box featured-item__right">
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
      </div>

      <div className="col-xs-12 col-sm-8 col-md-8 featured-item__description">
        <h2 className="subheader">
          <FormattedMessage id="featured.item1.subtitle" />
        </h2>
        <p><FormattedMessage id="featured.item1.p1" /></p>
        <p><FormattedMessage id="featured.item1.p2" /></p>
        <p><FormattedMessage id="featured.item1.p3" /></p>
        <p><FormattedMessage id="featured.item1.p4" /></p>
      </div>

    </div>
  )
}

export default FeaturedItem1;
