import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  {
    markerOffset: { x: 25, y: -8 },
    markerColor: "#f00",
    name: "台灣",
    coordinates: [121, 24],
  },
  {
    markerOffset: { x: 0, y: 18 },
    markerColor: "#00f",
    name: "中國",
    coordinates: [108, 30],
  },
  {
    markerOffset: { x: -5, y: -27 },
    markerColor: "#0aa",
    name: "韓國",
    coordinates: [128, 36],
  },
  {
    markerOffset: { x: 25, y: -8 },
    markerColor: "#f90",
    name: "日本",
    coordinates: [138, 36],
  },
  {
    markerOffset: { x: 0, y: 15 },
    markerColor: "#faf",
    name: "歐洲",
    coordinates: [8, 50],
  },
  {
    markerOffset: { x: 0, y: 15 },
    markerColor: "#0af",
    name: "美國",
    coordinates: [-115, 42],
  },
];

const MapChart = () => {
  return (
    <ComposableMap className="mapChart">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset, markerColor }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke={markerColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            x={markerOffset.x}
            y={markerOffset.y}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
