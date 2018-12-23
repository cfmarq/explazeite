import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import ProductPopup from './ProductPopup.js';
import { Row, Col } from 'reactstrap';

const products = [
  {
    id: 1,
    imgTN: '/public/images/produtos/azeitona/imagens_thumbnails/p_azeitona-1.png',
    imgPP: '/public/images/produtos/azeitona/imagens_popup/p_azeitona-1.png',
    label: 'products.olive.p1.label',
    btnLabel: 'products.olive.p1.button.label',
    popupTitle: 'products.olive.p1.popup.title',
    popupSubtitle: 'products.olive.p1.popup.subtitle',
    popupP1: 'products.olive.p1.popup.p1',
    popupP2: 'products.olive.p1.popup.p2',
    popupP3: 'products.olive.p1.popup.p3'
  },
  {
    id: 2,
    imgTN: '/public/images/produtos/azeitona/imagens_thumbnails/p_azeitona-2.png',
    imgPP: '/public/images/produtos/azeitona/imagens_popup/p_azeitona-2.png',
    label: 'products.olive.p2.label',
    btnLabel: 'products.olive.p2.button.label',
    popupTitle: 'products.olive.p2.popup.title',
    popupSubtitle: 'products.olive.p2.popup.subtitle',
    popupP1: 'products.olive.p2.popup.p1',
    popupP2: 'products.olive.p2.popup.p2',
    popupP3: 'products.olive.p2.popup.p3'
  },
  {
    id: 3,
    imgTN: '/public/images/produtos/azeitona/imagens_thumbnails/p_azeitona-3.png',
    imgPP: '/public/images/produtos/azeitona/imagens_popup/p_azeitona-3.png',
    label: 'products.olive.p3.label',
    btnLabel: 'products.olive.p3.button.label',
    popupTitle: 'products.olive.p3.popup.title',
    popupSubtitle: 'products.olive.p3.popup.subtitle',
    popupP1: 'products.olive.p3.popup.p1',
    popupP2: 'products.olive.p3.popup.p2',
    popupP3: 'products.olive.p3.popup.p3'
  },
  {
    id: 4,
    imgTN: '/public/images/produtos/azeitona/imagens_thumbnails/p_azeitona-4.png',
    imgPP: '/public/images/produtos/azeitona/imagens_popup/p_azeitona-4.png',
    label: 'products.olive.p4.label',
    btnLabel: 'products.olive.p4.button.label',
    popupTitle: 'products.olive.p4.popup.title',
    popupSubtitle: 'products.olive.p4.popup.subtitle',
    popupP1: 'products.olive.p4.popup.p1',
    popupP2: 'products.olive.p4.popup.p2',
    popupP3: 'products.olive.p4.popup.p3'
  }

];

class Olive extends Component {
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
                <FormattedMessage id="products.olive.title" />
              </h1>
              <h3>//</h3>
              <br/>
              <br/>
              <h3>
                <FormattedMessage id="products.olive.benefits" /><br/>-
              </h3>
              <p>
                <FormattedMessage id="products.olive.benefits.p1" />
              </p>
              <h3>
                <FormattedMessage id="products.olive.interest" /><br/>-
              </h3>
              <p>
                <FormattedMessage id="products.olive.interest.p1" />
              </p>
              <p>
                <FormattedMessage id="products.olive.interest.p2" />
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
                <FormattedMessage id="products.olive.title" />
              </h1>
              <h3>//</h3>
              <br/>
              <br/>
              <h3>
                <FormattedMessage id="products.olive.benefits" /><br/>-
              </h3>
              <p>
                <FormattedMessage id="products.olive.benefits.p1" />
              </p>
              <h3>
                <FormattedMessage id="products.olive.interest" /><br/>-
              </h3>
              <p>
                <FormattedMessage id="products.olive.interest.p1" />
              </p>
              <p>
                <FormattedMessage id="products.olive.interest.p2" />
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Olive;
