import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import ProductPopup from './ProductPopup.js';
import { Button, Row, Col } from 'reactstrap';

const products = [
  {
    id: 1,
    imgTN: '/public/images/produtos/combinados/p_combinado-1.png',
    imgPP: '/public/images/produtos/combinados/p_combinado-1.png',
    label: 'products.mix.p1.label',
    btnLabel: 'products.mix.p1.button.label',
    popupTitle: 'products.mix.p1.button.label',
    popupSubtitle: 'products.mix.p1.label',
    popupP1: 'products.mix.p1',
    popupP2: 'products.mix.p2',
    popupP3: 'products.mix.p3'
  },
  {
    id: 2,
    imgTN: '/public/images/produtos/combinados/p_combinado-2.png',
    imgPP: '/public/images/produtos/combinados/p_combinado-2.png',
    label: 'products.mix.p2.label',
    btnLabel: 'products.mix.p2.button.label',
    popupTitle: 'products.mix.p2.button.label',
    popupSubtitle: 'products.mix.p2.label',
    popupP1: 'products.mix.p1',
    popupP2: 'products.mix.p2',
    popupP3: 'products.mix.p3'
  },
  {
    id: 3,
    imgTN: '/public/images/produtos/combinados/p_combinado-3.png',
    imgPP: '/public/images/produtos/combinados/p_combinado-3.png',
    label: 'products.mix.p3.label',
    btnLabel: 'products.mix.p3.button.label',
    popupTitle: 'products.mix.p3.button.label',
    popupSubtitle: 'products.mix.p3.label',
    popupP1: 'products.mix.p1',
    popupP2: 'products.mix.p2',
    popupP3: 'products.mix.p3'
  },
  {
    id: 4,
    imgTN: '/public/images/produtos/combinados/p_combinado-4.png',
    imgPP: '/public/images/produtos/combinados/p_combinado-4.png',
    label: 'products.mix.p4.label',
    btnLabel: 'products.mix.p4.button.label',
    popupTitle: 'products.mix.p4.button.label',
    popupSubtitle: 'products.mix.p4.label',
    popupP1: 'products.mix.p1',
    popupP2: 'products.mix.p2',
    popupP3: 'products.mix.p3'
  },
  {
    id: 5,
    imgTN: '/public/images/produtos/combinados/p_combinado-5.png',
    imgPP: '/public/images/produtos/combinados/p_combinado-5.png',
    label: 'products.mix.p5.label',
    btnLabel: 'products.mix.p5.button.label',
    popupTitle: 'products.mix.p5.button.label',
    popupSubtitle: 'products.mix.p5.label',
    popupP1: 'products.mix.p1',
    popupP2: 'products.mix.p2',
    popupP3: 'products.mix.p3'
  },
  {
    id: 6,
    imgTN: '/public/images/produtos/combinados/p_combinado-6.png',
    imgPP: '/public/images/produtos/combinados/p_combinado-6.png',
    label: 'products.mix.p6.label',
    btnLabel: 'products.mix.p6.button.label',
    popupTitle: 'products.mix.p6.button.label',
    popupSubtitle: 'products.mix.p6.label',
    popupP1: 'products.mix.p1',
    popupP2: 'products.mix.p2',
    popupP3: 'products.mix.p3'
  },
  {
    id: 7,
    imgTN: '/public/images/produtos/combinados/p_combinado-7.png',
    imgPP: '/public/images/produtos/combinados/p_combinado-7.png',
    label: 'products.mix.p7.label',
    btnLabel: 'products.mix.p7.button.label',
    popupTitle: 'products.mix.p7.button.label',
    popupSubtitle: 'products.mix.p7.label',
    popupP1: 'products.mix.p1',
    popupP2: 'products.mix.p2',
    popupP3: 'products.mix.p3'
  },
  {
    id: 8,
    imgTN: '/public/images/produtos/combinados/p_combinado-8.png',
    imgPP: '/public/images/produtos/combinados/p_combinado-8.png',
    label: 'products.mix.p8.label',
    btnLabel: 'products.mix.p8.button.label',
    popupTitle: 'products.mix.p8.button.label',
    popupSubtitle: 'products.mix.p8.label',
    popupP1: 'products.mix.p1',
    popupP2: 'products.mix.p2',
    popupP3: 'products.mix.p3'
  },
  {
    id: 9,
    imgTN: '/public/images/produtos/combinados/p_combinado-9.png',
    imgPP: '/public/images/produtos/combinados/p_combinado-9.png',
    label: 'products.mix.p9.label',
    btnLabel: 'products.mix.p9.button.label',
    popupTitle: 'products.mix.p9.button.label',
    popupSubtitle: 'products.mix.p9.label',
    popupP1: 'products.mix.p1',
    popupP2: 'products.mix.p2',
    popupP3: 'products.mix.p3'
  },
  {
    id: 10,
    imgTN: '/public/images/produtos/combinados/p_combinado-10.png',
    imgPP: '/public/images/produtos/combinados/p_combinado-10.png',
    label: 'products.mix.p10.label',
    btnLabel: 'products.mix.p10.button.label',
    popupTitle: 'products.mix.p10.button.label',
    popupSubtitle: 'products.mix.p10.label',
    popupP1: 'products.mix.p1',
    popupP2: 'products.mix.p2',
    popupP3: 'products.mix.p3'
  },
  {
    id: 11,
    imgTN: '/public/images/produtos/combinados/p_combinado-11.png',
    imgPP: '/public/images/produtos/combinados/p_combinado-11.png',
    label: 'products.mix.p11.label',
    btnLabel: 'products.mix.p11.button.label',
    popupTitle: 'products.mix.p11.button.label',
    popupSubtitle: 'products.mix.p11.label',
    popupP1: 'products.mix.p1',
    popupP2: 'products.mix.p2',
    popupP3: 'products.mix.p3'
  },
  {
    id: 12,
    imgTN: '/public/images/produtos/combinados/p_combinado-12.png',
    imgPP: '/public/images/produtos/combinados/p_combinado-12.png',
    label: 'products.mix.p12.label',
    btnLabel: 'products.mix.p12.button.label',
    popupTitle: 'products.mix.p12.button.label',
    popupSubtitle: 'products.mix.p12.label',
    popupP1: 'products.mix.p1',
    popupP2: 'products.mix.p2',
    popupP3: 'products.mix.p3'
  }

];

class Mix extends Component {
  render (){
    const product = products.map((products) =>
      <div className="col-xs-12 col-sm-6 col-md-4 product__outer-div" key={products.id}>
        <div className="product-div">
          <div className="product__upper-div">
            <img src={products.imgTN} alt=""  />
          </div>
          <div className="product__label-div">
            <FormattedMessage id={products.label} />
          </div>
          <div className="product__button-div gold-div">
            <FormattedMessage id={products.btnLabel} />
          </div>
        </div>
      </div>
    );

    return (
      <div className="container center-container products__div">
        <Row>
          <Col xs="12" sm="3" md="3">
            <div className="products__left-div hidden-xs">
              <h1>
                <FormattedMessage id="products.mix.title" />
              </h1>
              <h3>//</h3>
              <br/>
              <br/>
              <p>
                <FormattedMessage id="products.mix.p1" /><br/>-
              </p>
            </div>
          </Col>

          <Col xs="12" sm="9" md="9">
            <div className="products__right-div">
              {product}
            </div>
          </Col>

          <Col xs="12" sm="3" md="3">
            <div className="products__left-div visible-xs">
              <h1>
                <FormattedMessage id="products.mix.title" />
              </h1>
              <h3>//</h3>
              <br/>
              <br/>
              <p>
                <FormattedMessage id="products.mix.p1" /><br/>-
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Mix;
