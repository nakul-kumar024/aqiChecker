"use client";

import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("./MapClient"), {
  ssr: false,
});

export default function MapView({ lat, lon }) {
  return (
    <div style={{ height: "350px", width: "100%" }}>
      <MapClient lat={lat} lon={lon} />
    </div>
  );
}
