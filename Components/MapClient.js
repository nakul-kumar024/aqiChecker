// "use client";

// import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// export default function MapClient({ lat, lon }) {
//   return (
//     <MapContainer
//       center={[lat, lon]}
//       zoom={11}
//       style={{ height: "400px", width: "100%" }}
//     >
//       <TileLayer
//         attribution='&copy; OpenStreetMap contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />

//       <CircleMarker center={[lat, lon]} radius={10} color="red">
//         <Popup>Delhi AQI Location</Popup>
//       </CircleMarker>
//     </MapContainer>
//   );
// }


























"use client";

import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapClient({ lat, lon }) {
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={11}
      scrollWheelZoom
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <CircleMarker
        center={[lat, lon]}
        radius={15}
        pathOptions={{ color: "green", fillColor: "green", fillOpacity: 0.6 }}
      >
        <Popup>
          <strong>City AQI</strong>
          <br />
          Hardcoded for now
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
}

