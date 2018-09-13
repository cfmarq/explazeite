import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Featured = () => {
  return (

    <div className="center-container container">
      <div className="col-md-12">
        <h1><FormattedMessage id="featured.title" /><br/>//</h1>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4 featured__outer-box">
        <div className="featured__inner-box">
          <div className="featured__img-div">
            <img className="featured__img" src="/public/images/destaques/nova_imagem.png" alt="" />
          </div>
          <div className="featured__label">
            <div className="col-md-8 featured__label--text">
              <p className="subtitle"><FormattedMessage id="featured.item1.label" /></p>
            </div>
            <div className="col-md-4 featured__label--button">
              <Link to="/featured-1">
                <Button className="btn-gold">
                  <FormattedMessage id="buttons.read-more" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4 featured__outer-box">
        <div className="featured__inner-box">
          <div className="featured__img-div">
            <img className="featured__img" src="/public/images/destaques/vinha.png" alt="" />
          </div>
          <div className="featured__label">
            <div className="col-md-8 featured__label--text">
              <p className="subtitle"><FormattedMessage id="featured.item2.label" /></p>
            </div>
            <div className="col-md-4 featured__label--button">
              <Link to="/featured-2">
                <Button className="btn-gold">
                  <FormattedMessage id="buttons.read-more" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-4 featured__outer-box">
        <div className="featured__inner-box">
          <div className="featured__img-div">
            <img className="featured__img" src="/public/images/destaques/latas1.png" alt="" />
          </div>
          <div className="featured__label">
            <div className="col-md-8 featured__label--text">
              <p className="subtitle"><FormattedMessage id="featured.item3.label" /></p>
            </div>
            <div className="col-md-4 featured__label--button">
              <Link to="/featured-3">
                <Button className="btn-gold">
                  <FormattedMessage id="buttons.read-more" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Featured;
