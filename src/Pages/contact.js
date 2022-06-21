import React from "react";
import GoogleMapReact from "google-map-react";
import mapKey from "../Components/key";

const Contact = () => {
  const AnyReactComponent = ({ text }) => (
    <div className="markPoint">
      <div className="point">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
      </div>
      <div className="text">{text}</div>
    </div>
  );

  return (
    <div className="container" style={{ height: "43.5vh" }}>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapKey }}
          defaultCenter={{ lat: 24.9553234, lng: 121.3841572 }}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={24.9553234}
            lng={121.3841572}
            text="明曜科技股份有限公司"
          />
          <AnyReactComponent
            lat={24.9485431}
            lng={121.381965}
            text="桃子腳國民中小學"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Contact;
