import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import ProductPopup from './ProductPopup.js';

const products = [
  {
    id: 1,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-1.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-1.png',
    label: 'products.oliveOil.p1.label',
    btnLabel: 'products.oliveOil.p1.button.label',
    popupTitle: 'products.oliveOil.p1.popup.title',
    popupSubtitle: 'products.oliveOil.p1.popup.subtitle',
    popupP1: 'products.oliveOil.p1.popup.p1',
    popupP2: 'products.oliveOil.p1.popup.p2',
    popupP3: 'products.oliveOil.p1.popup.p3'
  },
  {
    id: 2,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-2.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-2.png',
    label: 'products.oliveOil.p2.label',
    btnLabel: 'products.oliveOil.p2.button.label',
    popupTitle: 'products.oliveOil.p2.popup.title',
    popupSubtitle: 'products.oliveOil.p2.popup.subtitle',
    popupP1: 'products.oliveOil.p2.popup.p1',
    popupP2: 'products.oliveOil.p2.popup.p2',
    popupP3: 'products.oliveOil.p2.popup.p3'
  },
  {
    id: 3,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-3.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-3.png',
    label: 'products.oliveOil.p3.label',
    btnLabel: 'products.oliveOil.p3.button.label',
    popupTitle: 'products.oliveOil.p3.popup.title',
    popupSubtitle: 'products.oliveOil.p3.popup.subtitle',
    popupP1: 'products.oliveOil.p3.popup.p1',
    popupP2: 'products.oliveOil.p3.popup.p2',
    popupP3: 'products.oliveOil.p3.popup.p3'
  },
  {
    id: 4,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-4.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-4.png',
    label: 'products.oliveOil.p4.label',
    btnLabel: 'products.oliveOil.p4.button.label',
    popupTitle: 'products.oliveOil.p4.popup.title',
    popupSubtitle: 'products.oliveOil.p4.popup.subtitle',
    popupP1: 'products.oliveOil.p4.popup.p1',
    popupP2: 'products.oliveOil.p4.popup.p2',
    popupP3: 'products.oliveOil.p4.popup.p3'
  },
  {
    id: 5,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-5.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-5.png',
    label: 'products.oliveOil.p5.label',
    btnLabel: 'products.oliveOil.p5.button.label',
    popupTitle: 'products.oliveOil.p5.popup.title',
    popupSubtitle: 'products.oliveOil.p5.popup.subtitle',
    popupP1: 'products.oliveOil.p5.popup.p1',
    popupP2: 'products.oliveOil.p5.popup.p2',
    popupP3: 'products.oliveOil.p5.popup.p3'
  },
  {
    id: 6,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-6.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-6.png',
    label: 'products.oliveOil.p6.label',
    btnLabel: 'products.oliveOil.p6.button.label',
    popupTitle: 'products.oliveOil.p66.popup.title',
    popupSubtitle: 'products.oliveOil.p6.popup.subtitle',
    popupP1: 'products.oliveOil.p6.popup.p1',
    popupP2: 'products.oliveOil.p6.popup.p2',
    popupP3: 'products.oliveOil.p6.popup.p3'
  },
  {
    id: 7,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-7.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-7.png',
    label: 'products.oliveOil.p7.label',
    btnLabel: 'products.oliveOil.p7.button.label',
    popupTitle: 'products.oliveOil.p7.popup.title',
    popupSubtitle: 'products.oliveOil.p7.popup.subtitle',
    popupP1: 'products.oliveOil.p7.popup.p1',
    popupP2: 'products.oliveOil.p7.popup.p2',
    popupP3: 'products.oliveOil.p7.popup.p3'
  },
  {
    id: 8,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-8.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-8.png',
    label: 'products.oliveOil.p8.label',
    btnLabel: 'products.oliveOil.p8.button.label',
    popupTitle: 'products.oliveOil.p8.popup.title',
    popupSubtitle: 'products.oliveOil.p8.popup.subtitle',
    popupP1: 'products.oliveOil.p8.popup.p1',
    popupP2: 'products.oliveOil.p8.popup.p2',
    popupP3: 'products.oliveOil.p8.popup.p3'
  },
  {
    id: 9,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-9.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-9.png',
    label: 'products.oliveOil.p9.label',
    btnLabel: 'products.oliveOil.p9.button.label',
    popupTitle: 'products.oliveOil.p9.popup.title',
    popupSubtitle: 'products.oliveOil.p9.popup.subtitle',
    popupP1: 'products.oliveOil.p9.popup.p1',
    popupP2: 'products.oliveOil.p9.popup.p2',
    popupP3: 'products.oliveOil.p9.popup.p3'
  },
  {
    id: 10,
    imgTN: '/public/images/produtos/azeite/imagens_thumbnails/p_azeite-10.png',
    imgPP: '/public/images/produtos/azeite/imagens_popup/p_azeite-10.png',
    label: 'products.oliveOil.p10.label',
    btnLabel: 'products.oliveOil.p10.button.label',
    popupTitle: 'products.oliveOil.p10.popup.title',
    popupSubtitle: 'products.oliveOil.p10.popup.subtitle',
    popupP1: 'products.oliveOil.p10.popup.p1',
    popupP2: 'products.oliveOil.p10.popup.p2',
    popupP3: 'products.oliveOil.p10.popup.p3'
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
