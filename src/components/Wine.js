import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import ProductPopup from './ProductPopup.js';
import { Row, Col } from 'reactstrap';

const products = [
  {
    id: 1,
    imgTN: '/public/images/produtos/vinho/imagens_thumbnails/p_vinho-1.png',
    imgPP: '/public/images/produtos/vinho/imagens_popup/p_vinho-1.png',
    label: 'products.wine.p1.label',
    btnLabel: 'products.wine.p1.button.label',
    popupTitle: 'products.wine.p1.popup.title',
    popupSubtitle: 'products.wine.p1.popup.subtitle',
    popupP1: 'products.wine.p1.popup.p1',
    popupP2: 'products.wine.p1.popup.p2',
    popupP3: 'products.wine.p1.popup.p3'
  },
  {
    id: 2,
    imgTN: '/public/images/produtos/vinho/imagens_thumbnails/p_vinho-2.png',
    imgPP: '/public/images/produtos/vinho/imagens_popup/p_vinho-2.png',
    label: 'products.wine.p2.label',
    btnLabel: 'products.wine.p2.button.label',
    popupTitle: 'products.wine.p2.popup.title',
    popupSubtitle: 'products.wine.p2.popup.subtitle',
    popupP1: 'products.wine.p2.popup.p1',
    popupP2: 'products.wine.p2.popup.p2',
    popupP3: 'products.wine.p2.popup.p3'
  },
  {
    id: 3,
    imgTN: '/public/images/produtos/vinho/imagens_thumbnails/p_vinho-3.png',
    imgPP: '/public/images/produtos/vinho/imagens_popup/p_vinho-3.png',
    label: 'products.wine.p3.label',
    btnLabel: 'products.wine.p3.button.label',
    popupTitle: 'products.wine.p3.popup.title',
    popupSubtitle: 'products.wine.p3.popup.subtitle',
    popupP1: 'products.wine.p3.popup.p1',
    popupP2: 'products.wine.p3.popup.p2',
    popupP3: 'products.wine.p3.popup.p3'
  },
  {
    id: 4,
    imgTN: '/public/images/produtos/vinho/imagens_thumbnails/p_vinho-4.png',
    imgPP: '/public/images/produtos/vinho/imagens_popup/p_vinho-4.png',
    label: 'products.wine.p4.label',
    btnLabel: 'products.wine.p4.button.label',
    popupTitle: 'products.wine.p4.popup.title',
    popupSubtitle: 'products.wine.p4.popup.subtitle',
    popupP1: 'products.wine.p4.popup.p1',
    popupP2: 'products.wine.p4.popup.p2',
    popupP3: 'products.wine.p4.popup.p3'
  },
  {
    id: 5,
    imgTN: '/public/images/produtos/vinho/imagens_thumbnails/p_vinho-5.png',
    imgPP: '/public/images/produtos/vinho/imagens_popup/p_vinho-5.png',
    label: 'products.wine.p5.label',
    btnLabel: 'products.wine.p5.button.label',
    popupTitle: 'products.wine.p5.popup.title',
    popupSubtitle: 'products.wine.p5.popup.subtitle',
    popupP1: 'products.wine.p5.popup.p1',
    popupP2: 'products.wine.p5.popup.p2',
    popupP3: 'products.wine.p5.popup.p3'
  },
  {
    id: 6,
    imgTN: '/public/images/produtos/vinho/imagens_thumbnails/p_vinho-6.png',
    imgPP: '/public/images/produtos/vinho/imagens_popup/p_vinho-6.png',
    label: 'products.wine.p6.label',
    btnLabel: 'products.wine.p6.button.label',
    popupTitle: 'products.wine.p6.popup.title',
    popupSubtitle: 'products.wine.p6.popup.subtitle',
    popupP1: 'products.wine.p6.popup.p1',
    popupP2: 'products.wine.p6.popup.p2',
    popupP3: 'products.wine.p6.popup.p3'
  },
  {
    id: 7,
    imgTN: '/public/images/produtos/vinho/imagens_thumbnails/p_vinho-7.png',
    imgPP: '/public/images/produtos/vinho/imagens_popup/p_vinho-7.png',
    label: 'products.wine.p7.label',
    btnLabel: 'products.wine.p7.button.label',
    popupTitle: 'products.wine.p7.popup.title',
    popupSubtitle: 'products.wine.p7.popup.subtitle',
    popupP1: 'products.wine.p7.popup.p1',
    popupP2: 'products.wine.p7.popup.p2',
    popupP3: 'products.wine.p7.popup.p3'
  },
  {
    id: 8,
    imgTN: '/public/images/produtos/vinho/imagens_thumbnails/p_vinho-8.png',
    imgPP: '/public/images/produtos/vinho/imagens_popup/p_vinho-8.png',
    label: 'products.wine.p8.label',
    btnLabel: 'products.wine.p8.button.label',
    popupTitle: 'products.wine.p8.popup.title',
    popupSubtitle: 'products.wine.p8.popup.subtitle',
    popupP1: 'products.wine.p8.popup.p1',
    popupP2: 'products.wine.p8.popup.p2',
    popupP3: 'products.wine.p8.popup.p3'
  },
  {
    id: 9,
    imgTN: '/public/images/produtos/vinho/imagens_thumbnails/p_vinho-9.png',
    imgPP: '/public/images/produtos/vinho/imagens_popup/p_vinho-9.png',
    label: 'products.wine.p9.label',
    btnLabel: 'products.wine.p9.button.label',
    popupTitle: 'products.wine.p9.popup.title',
    popupSubtitle: 'products.wine.p9.popup.subtitle',
    popupP1: 'products.wine.p9.popup.p1',
    popupP2: 'products.wine.p9.popup.p2',
    popupP3: 'products.wine.p9.popup.p3'
  },
  {
    id: 10,
    imgTN: '/public/images/produtos/vinho/imagens_thumbnails/p_vinho-10.png',
    imgPP: '/public/images/produtos/vinho/imagens_popup/p_vinho-10.png',
    label: 'products.wine.p10.label',
    btnLabel: 'products.wine.p10.button.label',
    popupTitle: 'products.wine.p10.popup.title',
    popupSubtitle: 'products.wine.p10.popup.subtitle',
    popupP1: 'products.wine.p10.popup.p1',
    popupP2: 'products.wine.p10.popup.p2',
    popupP3: 'products.wine.p10.popup.p3'
  },
  {
    id: 11,
    imgTN: '/public/images/produtos/vinho/imagens_thumbnails/p_vinho-11.png',
    imgPP: '/public/images/produtos/vinho/imagens_popup/p_vinho-11.png',
    label: 'products.wine.p11.label',
    btnLabel: 'products.wine.p11.button.label',
    popupTitle: 'products.wine.p11.popup.title',
    popupSubtitle: 'products.wine.p11.popup.subtitle',
    popupP1: 'products.wine.p11.popup.p1',
    popupP2: 'products.wine.p11.popup.p2',
    popupP3: 'products.wine.p11.popup.p3'
  },
  {
    id: 12,
    imgTN: '/public/images/produtos/vinho/imagens_thumbnails/p_vinho-12.png',
    imgPP: '/public/images/produtos/vinho/imagens_popup/p_vinho-12.png',
    label: 'products.wine.p12.label',
    btnLabel: 'products.wine.p12.button.label',
    popupTitle: 'products.wine.p12.popup.title',
    popupSubtitle: 'products.wine.p12.popup.subtitle',
    popupP1: 'products.wine.p12.popup.p1',
    popupP2: 'products.wine.p12.popup.p2',
    popupP3: 'products.wine.p12.popup.p3'
  }

];

class Wine extends Component {
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
                <FormattedMessage id="products.wine.title" />
              </h1>
              <h3>//</h3>
              <br/>
              <br/>
              <h3>
                <FormattedMessage id="products.wine.benefits" /><br/>-
              </h3>
              <p>
                <FormattedMessage id="products.wine.benefits.p1" />
              </p>
              <p>
                <FormattedMessage id="products.wine.benefits.p2" />
              </p>
              <p>
                <FormattedMessage id="products.wine.benefits.p3" />
              </p>
              <p>
                <FormattedMessage id="products.wine.benefits.p4" />
              </p>
              <h3>
                <FormattedMessage id="products.wine.interest" /><br/>-
              </h3>
              <p>
                <FormattedMessage id="products.wine.interest.p1" />
              </p>
              <p>
                <FormattedMessage id="products.wine.interest.p2" />
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
                <FormattedMessage id="products.wine.title" />
              </h1>
              <h3>//</h3>
              <br/>
              <br/>
              <h3>
                <FormattedMessage id="products.wine.benefits" /><br/>-
              </h3>
              <p>
                <FormattedMessage id="products.wine.benefits.p1" />
              </p>
              <p>
                <FormattedMessage id="products.wine.benefits.p2" />
              </p>
              <p>
                <FormattedMessage id="products.wine.benefits.p3" />
              </p>
              <p>
                <FormattedMessage id="products.wine.benefits.p4" />
              </p>
              <h3>
                <FormattedMessage id="products.wine.interest" /><br/>-
              </h3>
              <p>
                <FormattedMessage id="products.wine.interest.p1" />
              </p>
              <p>
                <FormattedMessage id="products.wine.interest.p2" />
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Wine;
