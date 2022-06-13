import React from "react";
import GoogleMapReact from "google-map-react";
import mapKey from "../Components/key";

const Contact = ({ latitude = 24.9553234, longitude = 121.3841572 }) => {
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: latitude, lng: longitude },
      map,
      title: "明曜科技股份有限公司",
    });
    return marker;
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <div className="container" style={{ height: "30vh", width: "30%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapKey }}
        defaultCenter={{ lat: latitude, lng: longitude }}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
        <AnyReactComponent lat={24.9553234} lng={121.3841572} text="明曜科技" />
      </GoogleMapReact>
    </div>
  );
};

export default Contact;
