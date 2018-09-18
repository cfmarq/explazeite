import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import ProductPopup from './ProductPopup.js';

const products = [
  {
    id: 1,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-1.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-1.png',
    label: 'products.p1.label',
    btnLabel: 'products.p1.button.label',
    popupTitle: 'products.p1.popup.title',
    popupSubtitle: 'products.p1.popup.subtitle',
    popupP1: 'products.p1.popup.p1',
    popupP2: 'products.p1.popup.p2',
    popupP3: 'products.p1.popup.p3'
  },
  {
    id: 2,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-2.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-2.png',
    label: 'products.p2.label',
    btnLabel: 'products.p2.button.label',
    popupTitle: 'products.p2.popup.title',
    popupSubtitle: 'products.p2.popup.subtitle',
    popupP1: 'products.p2.popup.p1',
    popupP2: 'products.p2.popup.p2',
    popupP3: 'products.p2.popup.p3'
  },
  {
    id: 3,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-3.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-3.png',
    label: 'products.p3.label',
    btnLabel: 'products.p3.button.label',
    popupTitle: 'products.p3.popup.title',
    popupSubtitle: 'products.p3.popup.subtitle',
    popupP1: 'products.p3.popup.p1',
    popupP2: 'products.p3.popup.p2',
    popupP3: 'products.p3.popup.p3'
  },
  {
    id: 4,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-4.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-4.png',
    label: 'products.p4.label',
    btnLabel: 'products.p4.button.label',
    popupTitle: 'products.p4.popup.title',
    popupSubtitle: 'products.p4.popup.subtitle',
    popupP1: 'products.p4.popup.p1',
    popupP2: 'products.p4.popup.p2',
    popupP3: 'products.p4.popup.p3'
  },
  {
    id: 5,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-5.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-5.png',
    label: 'products.p5.label',
    btnLabel: 'products.p5.button.label',
    popupTitle: 'products.p5.popup.title',
    popupSubtitle: 'products.p5.popup.subtitle',
    popupP1: 'products.p5.popup.p1',
    popupP2: 'products.p5.popup.p2',
    popupP3: 'products.p5.popup.p3'
  },
  {
    id: 6,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-6.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-6.png',
    label: 'products.p6.label',
    btnLabel: 'products.p6.button.label',
    popupTitle: 'products.p66.popup.title',
    popupSubtitle: 'products.p6.popup.subtitle',
    popupP1: 'products.p6.popup.p1',
    popupP2: 'products.p6.popup.p2',
    popupP3: 'products.p6.popup.p3'
  },
  {
    id: 7,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-7.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-7.png',
    label: 'products.p7.label',
    btnLabel: 'products.p7.button.label',
    popupTitle: 'products.p7.popup.title',
    popupSubtitle: 'products.p7.popup.subtitle',
    popupP1: 'products.p7.popup.p1',
    popupP2: 'products.p7.popup.p2',
    popupP3: 'products.p7.popup.p3'
  },
  {
    id: 8,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-8.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-8.png',
    label: 'products.p8.label',
    btnLabel: 'products.p8.button.label',
    popupTitle: 'products.p8.popup.title',
    popupSubtitle: 'products.p8.popup.subtitle',
    popupP1: 'products.p8.popup.p1',
    popupP2: 'products.p8.popup.p2',
    popupP3: 'products.p8.popup.p3'
  },
  {
    id: 9,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-9.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-9.png',
    label: 'products.p9.label',
    btnLabel: 'products.p9.button.label',
    popupTitle: 'products.p9.popup.title',
    popupSubtitle: 'products.p9.popup.subtitle',
    popupP1: 'products.p9.popup.p1',
    popupP2: 'products.p9.popup.p2',
    popupP3: 'products.p9.popup.p3'
  },
  {
    id: 10,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-10.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-10.png',
    label: 'products.p10.label',
    btnLabel: 'products.p10.button.label',
    popupTitle: 'products.p10.popup.title',
    popupSubtitle: 'products.p10.popup.subtitle',
    popupP1: 'products.p10.popup.p1',
    popupP2: 'products.p10.popup.p2',
    popupP3: 'products.p10.popup.p3'
  }
];

class OliveOil extends Component {
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
          <div className="product__button-div">
            <ProductPopup product={products} />
          </div>
        </div>
      </div>
    );

    return (
      <div className="container products__div">
        <div className="col-xs-12 col-sm-9 col-md-3 products__left-div">
          <h1>
            <FormattedMessage id="products.oliveOil.title" /><br/>//
          </h1>
          <h3>
            <FormattedMessage id="products.oliveOil.benefits" /><br/>-
          </h3>
          <p>
            <FormattedMessage id="products.oliveOil.benefits.p1" />
          </p>
          <p>
            <FormattedMessage id="products.oliveOil.benefits.p2" />
          </p>
          <h3>
            <FormattedMessage id="products.oliveOil.interest" /><br/>-
          </h3>
          <p>
            <FormattedMessage id="products.oliveOil.interest.p1" />
          </p>
        </div>
        <div className="col-xs-12 col-sm-9 col-md-9 products__right-div">

          {product}

        </div>
    	</div>
    );
  }
}

export default OliveOil;
