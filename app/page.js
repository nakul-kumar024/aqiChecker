"use client";

import { useEffect, useState } from "react";
import MapView from "@/Components/MapView";
import AQICard from "@/Components/AQICard";

export default function Home() {
  const lat = 28.6139;
  const lon = 77.2090;

  const [aqiData, setAqiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAQI = async () => {
      try {
        const res = await fetch(
          `https://api.waqi.info/feed/geo:${lat};${lon}/?token=06734c3f8e6ea4f0681c4076e68dc121333ff583`
        );

        const json = await res.json();

        if (json.status !== "ok") {
          throw new Error("AQI API error");
        }

        setAqiData({
          aqi: json.data.aqi,
          city: json.data.city.name,
          time: json.data.time.s,
        });
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAQI();
  }, []);

  return (
    <main className="relative">
      <div className="relative">
        <MapView lat={lat} lon={lon} />

        {loading && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded shadow">
            Loading AQI...
          </div>
        )}

        {error && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-red-100 text-red-600 px-4 py-2 rounded">
            Failed to load AQI
          </div>
        )}

        {aqiData && (
          <AQICard
            aqi={aqiData.aqi}
            city={aqiData.city}
            time={aqiData.time}
          />
        )}
      </div>
    </main>
  );
}
