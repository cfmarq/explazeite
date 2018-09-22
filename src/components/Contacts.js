import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { compose, withProps } from "recompose";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDNkl3-HgMgAfzyoRSDkuNZ-BHJi6vhSy4",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: 39.7357326, lng: -8.3250844 }}>
    <Marker
      position={{ lat: 39.7357326, lng: -8.3250844 }}
      title="Explazeite"
     />
  </GoogleMap>
));

class Contacts extends Component {
  render() {
    return (
      <div>
        <div className="container center-container">
          <div className="box-container">
            <div className="col-xs-12 col-sm-6 col-md-6 contacts-div pr15">
              <h2><FormattedMessage id="contacts.where-are-we" /></h2>
              <div className="contacts-borderbox pr15">
                <p>
                  <span className="subt_contactos">
                    <FormattedMessage id="contacts.headquarters" />
                  </span><br/>
                  <FormattedMessage id="contacts.address1.p1" /><br/>
                  <FormattedMessage id="contacts.address1.p2" /><br/>
                  <FormattedMessage id="contacts.address1.p3" /><br/>
                  -<br/>
                  <i><FormattedMessage id="contacts.open-store" /></i>
                </p>
                <p>
                  <span className="subt_contactos">
                    <FormattedMessage id="contacts.filial" />
                  </span><br/>
                  <FormattedMessage id="contacts.address2.p1" /><br/>
                  <FormattedMessage id="contacts.address2.p2" />
                </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 contacts-div pl15">
              <h2><FormattedMessage id="contacts.reach-us" /><br/></h2>
              <div className="contacts-borderbox pr15">
                <p>
                  <span className="subt_contactos">
                    <FormattedMessage id="contacts.email.title" />
                  </span><br/>
                  <FormattedMessage id="contacts.email.content" />
                </p>
                <p>
                  <span className="subt_contactos">
                    <FormattedMessage id="contacts.telephone.title" />
                  </span><br/>
                  <FormattedMessage id="contacts.telephone.headquarters" /><br/>
                  <FormattedMessage id="contacts.telephone.headquarters.t1" /><br/>
                  <FormattedMessage id="contacts.telephone.headquarters.t2" /><br/>
                  <FormattedMessage id="contacts.telephone.headquarters.fax" /><br/>
                  <br/>
                  <FormattedMessage id="contacts.telephone.filial" /><br/>
                  <FormattedMessage id="contacts.telephone.filial.t1" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 contacts-div">
            <img className="contacts-img" src="/public/images/contactos.png" alt="" />
          </div>



          <div className="flex ">
            <div className="col-xs-12 col-sm-12 col-md-6 no-padding pr15">
              <h2><FormattedMessage id="contacts.map" /><br/></h2>
              <MyMapComponent key="map" />

            </div>
            <div className="col-xs-12 col-sm-12 col-md-6">
              <h2><FormattedMessage id="contacts.schedule" /><br/></h2>
              <div className="featured-borderbox">
                <p>
                  <FormattedMessage id="contacts.p1" /><br/>
                  <FormattedMessage id="contacts.p2" />
                </p>
                <p>
                  <FormattedMessage id="contacts.p3" /><br/>
                  <FormattedMessage id="contacts.p4" />
                </p>
                <p>//<br/>
                  <FormattedMessage id="contacts.p5" /><br/>
                  <FormattedMessage id="contacts.p6" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
