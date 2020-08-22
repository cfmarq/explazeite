import React from 'react';
import { FormattedMessage } from 'react-intl';
import ProductPopup from './ProductPopup.js';
import { Row, Col } from 'reactstrap';

import {wine, olive, oliveOil, lupine, mix} from './../../constants';

const Product = (props) => {

  var product
  if (props.match.params.id === 'wine') {
    product = wine;
  } else if (props.match.params.id === 'olive') {
    product = olive;
  } else if (props.match.params.id === 'oliveOil') {
    product = oliveOil;
  } else if (props.match.params.id === 'lupine') {
    product = lupine;
  } else if (props.match.params.id === 'mix') {
    product = mix;
  } else {
    props.history.push('/');
    return null
  }

  const productList = product.items.map((products) =>
    <ProductPopup product={products} url={props.match.params.id} />
  );

  return (
    <div className="container center-container products__div">
      <Row>
        <Col xs="12" sm="3" md="3">
          <div className="products__left-div hidden-xs">
            <h1>
              <FormattedMessage id={product.texts.title} />
            </h1>
            <h3>/ /</h3>
            <br/>
            <br/>
            {props.match.params.id !== 'mix' ?
              <>
                <h3>
                  <FormattedMessage id={product.texts.benefitsTitle} /><br/>-
                </h3>
                {product.texts.benefitsParagraphs.map(el => {
                  return <p><FormattedMessage id={el.text} /></p>
                })}
                <h3>
                  <FormattedMessage id={product.texts.interestTitle} /><br/>-
                </h3>
                {product.texts.interestParagraphs.map(el => {
                  return <p><FormattedMessage id={el.text} /></p>
                })}
              </>
              :
              <p><FormattedMessage id={product.texts.benefitsTitle} /></p>
            }
          </div>
        </Col>

        <Col xs="12" sm="9" md="9">
          <div className="products__right-div">
            {productList}
          </div>
        </Col>

        <Col xs="12" sm="3" md="3">
          <div className="products__left-div visible-xs">
          <h1>
            <FormattedMessage id={product.texts.title} />
          </h1>
          <h3>/ /</h3>
          <br/>
          <br/>

          {props.match.params.id !== 'mix' ?
            <>
              <h3>
                <FormattedMessage id={product.texts.benefitsTitle} /><br/>-
              </h3>
              {product.texts.benefitsParagraphs.map(el => {
                return <p><FormattedMessage id={el.text} /></p>
              })}
              <h3>
                <FormattedMessage id={product.texts.interestTitle} /><br/>-
              </h3>
              {product.texts.interestParagraphs.map(el => {
                return <p><FormattedMessage id={el.text} /></p>
              })}
            </>
            :
            <p><FormattedMessage id={product.texts.benefitsTitle} /></p>
          }
        </div>
        </Col>
      </Row>
    </div>
  );
}

export default Product;
