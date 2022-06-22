import React from "react";
import GoogleMapReact from "google-map-react";
import mapKey from "../Components/key";

const Contact = () => {
  const CustomMarker = ({ text }) => (
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
          defaultCenter={{ lat: 24.998752, lng: 121.4247906 }}
          defaultZoom={12}
          yesIWantToUseGoogleMapApiInternals
        >
          <CustomMarker
            lat={24.9553234}
            lng={121.3841572}
            text="明曜科技總公司"
          />
          <CustomMarker lat={25.0480859} lng={121.469599} text="三重新廠" />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Contact;
