import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import ProductPopup from './ProductPopup.js';
import { Button, Row, Col } from 'reactstrap';

const products = [
  {
    id: 1,
    imgTN: '/public/images/produtos/tremoco/imagens_thumbnails/p_tremoco-1.png',
    imgPP: '/public/images/produtos/tremoco/imagens_popup/p_tremoco-1.png',
    label: 'products.lupine.p1.label',
    btnLabel: 'products.lupine.p1.button.label',
    popupTitle: 'products.lupine.p1.popup.title',
    popupSubtitle: 'products.lupine.p1.popup.subtitle',
    popupP1: 'products.lupine.p1.popup.p1',
    popupP2: 'products.lupine.p1.popup.p2',
    popupP3: 'products.lupine.p1.popup.p3'
  },
  {
    id: 2,
    imgTN: '/public/images/produtos/tremoco/imagens_thumbnails/p_tremoco-2.png',
    imgPP: '/public/images/produtos/tremoco/imagens_popup/p_tremoco-2.png',
    label: 'products.lupine.p2.label',
    btnLabel: 'products.lupine.p2.button.label',
    popupTitle: 'products.lupine.p2.popup.title',
    popupSubtitle: 'products.lupine.p2.popup.subtitle',
    popupP1: 'products.lupine.p2.popup.p1',
    popupP2: 'products.lupine.p2.popup.p2',
    popupP3: 'products.lupine.p2.popup.p3'
  }

];

class Lupine extends Component {
  render (){
    const product = products.map((products) =>
      <ProductPopup product={products} />
    );

    return (
      <div className="container center-container products__div">
        <Row>
          <Col xs="12" sm="3" md="3">
            <div className="products__left-div hidden-xs">
              <h1>
                <FormattedMessage id="products.lupine.title" />
              </h1>
              <h3>//</h3>
              <br/>
              <br/>
              <h3>
                <FormattedMessage id="products.lupine.benefits" /><br/>-
              </h3>
              <p>
                <FormattedMessage id="products.lupine.benefits.p1" />
              </p>
              <h3>
                <FormattedMessage id="products.lupine.interest" /><br/>-
              </h3>
              <p>
                <FormattedMessage id="products.lupine.interest.p1" />
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
                <FormattedMessage id="products.lupine.title" />
              </h1>
              <h3>//</h3>
              <br/>
              <br/>
              <h3>
                <FormattedMessage id="products.lupine.benefits" /><br/>-
              </h3>
              <p>
                <FormattedMessage id="products.lupine.benefits.p1" />
              </p>
              <h3>
                <FormattedMessage id="products.lupine.interest" /><br/>-
              </h3>
              <p>
                <FormattedMessage id="products.lupine.interest.p1" />
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Lupine;
