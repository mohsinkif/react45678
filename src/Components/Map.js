import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, SVGOverlay, Marker, Popup,useMap } from 'react-leaflet'
import { useQuery } from "react-query";
import axios from 'axios'
import "leaflet.heat"
import { backendurl } from "../constant";
const position = [30.14708571250206, 71.44907853283596]
const bounds = [
  [51.49, -0.08],
  [51.5, -0.06],
]
async function Fetchdata(){
  const data = await axios.get(`${backendurl}fetch_coordinates`)
  return data
}

const Map = () => {
  const { data, isSuccess } = useQuery("mydata", Fetchdata);
  
  // Check if data is available and isSuccess is true
  if (!isSuccess) {
    return <div>Loading...</div>;
  }
   const markerData = data?.data || [];
    return <MapContainer center={position} zoom={17} scrollWheelZoom={true} style={{width:'200%',height:'85vh', marginTop:'10vh'}}>
    {/* <HeatMap/> */}
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {markerData.map((pos, index) => {
          const markerIcon = pos.predictionvalue === 1 ? "blue.png" : "red.png";
          return (
            <Marker
              key={index}
              position={[pos.latitude, pos.longitude]}
              icon={L.icon({ iconUrl: markerIcon, iconSize: [10, 10] })}
            >
              <Popup>This is marker {index}</Popup>
            </Marker>
          );
        })}
    <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
      <circle r="35" cx="30" cy="30" fill="blue" />
      <text x="50%" y="50%" stroke="black">
        text
      </text>
    </SVGOverlay>
  </MapContainer>
};

export default Map;

