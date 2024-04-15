import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, SVGOverlay, Marker, Popup,useMap } from 'react-leaflet'
import { useQuery } from "react-query";
import axios from 'axios'
import "leaflet.heat"
const position = [51.505, -0.09]
const bounds = [
  [51.49, -0.08],
  [51.5, -0.06],
]


const Map = () => {
    return <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{width:'200%',height:'85vh', marginTop:'12vh'}}>
    <HeatMap/>
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
async function Fetchdata(){
  const data = await axios.get('http://127.0.0.1:8001/fetch_coordinates')
  return data
}
function HeatMap() {
  const { data, isSuccess } = useQuery("mydata", Fetchdata);
  const map = useMap();
  console.log(data && data.data)
  // Check if the query was successful and data is available
  if (!isSuccess) {
    // You can render an error message or return early
    return <div>Error loading data</div>;
  }
  // Assuming data.data is an array with [latitude, longitude] pairs
  const addressPoints = data.data.map(function (p) {
    return [p.latitude, p.longitude,p.opacity];
  });

  var heat = L.heatLayer(addressPoints, { radius: 50 }).addTo(map);

  // You may want to return null or some other UI if the heatmap is rendered asynchronously
  return null;
}
