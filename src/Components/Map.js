import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, SVGOverlay, Marker, Popup } from 'react-leaflet'

const position = [51.505, -0.09]
const bounds = [
  [51.49, -0.08],
  [51.5, -0.06],
]


const Map = () => {
    return <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width:'200%',height:'85vh', marginTop:'12vh'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
      <circle r="35" cx="30" cy="30" fill="blue" />
      <text x="50%" y="50%" stroke="black">
        text
      </text>
    </SVGOverlay>
  </MapContainer>
};

export default Map;



/**
 * const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      mapRef.current = map;
    }
  }, []);

  return <div id="map" style={{ width: "100%", height: "87vh",marginTop:'12vh' }} />;
 */
