import React from "react";

const getAQIData = (aqi) => {
  if (aqi <= 50) {
    return { label: "Good", color: "text-green-600", image: "/Aqi/green.png" };
  } else if (aqi <= 100) {
    return { label: "Satisfactory", color: "text-lime-600", image: "/Aqi/green.png" };
  } else if (aqi <= 200) {
    return { label: "Moderate", color: "text-yellow-600", image: "/Aqi/yellow.png" };
  } else if (aqi <= 300) {
    return { label: "Poor", color: "text-orange-600", image: "/Aqi/orange.png" };
  } else if (aqi <= 400) {
    return { label: "Very Poor", color: "text-red-600", image: "/Aqi/red.png" };
  } else {
    return { label: "Severe", color: "text-red-800", image: "/Aqi/dark red.jpg" };
  }
};

const AQICard = ({ aqi, city, time }) => {
  if (aqi == null) return null;

  const aqiData = getAQIData(aqi);

  return (
    <div className="absolute  left-1/2 -translate-x-1/2 w-full z-50">
      <div className="mx-auto bg-white w-[80%] px-6 py-5 rounded-xl shadow-2xl h-80 relative">

        <h2 className="text-2xl font-medium">Real-time AQI</h2>
        <div>{city}</div>
        <div className="text-sm italic">Last Updated: {time}</div>

        <div className="mt-8 flex gap-32">
          <div>
            <div>Live AQI</div>
            <p className={`text-5xl font-bold ${aqiData.color}`}>{aqi}</p>
          </div>

          <div>
            <div>Air Quality</div>
            <span className={`font-semibold ${aqiData.color}`}>
              {aqiData.label}
            </span>
          </div>
        </div>

        <div className="absolute top-24 right-16">
          <img src={aqiData.image} alt={aqiData.label} width={155} />
        </div>
      </div>
    </div>
  );
};

export default AQICard;
//           