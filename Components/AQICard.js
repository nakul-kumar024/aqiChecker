import React from "react";

const getAQIData = (aqi) => {
  if (aqi <= 50)    return { label: "Good",        color: "text-green-600",   image: "/Aqi/green.png" };
  if (aqi <= 100)   return { label: "Satisfactory", color: "text-lime-600",   image: "/Aqi/green.png" };
  if (aqi <= 200)   return { label: "Moderate",     color: "text-yellow-600", image: "/Aqi/yellow.png" };
  if (aqi <= 300)   return { label: "Poor",         color: "text-orange-600", image: "/Aqi/orange.png" };
  if (aqi <= 400)   return { label: "Very Poor",    color: "text-red-600",    image: "/Aqi/red.png" };
  return            { label: "Severe",       color: "text-red-800",    image: "/Aqi/dark red.jpg" };
};

const AQICard = ({ aqi, city, time }) => {
  if (aqi == null) return null;

  const { label, color, image } = getAQIData(aqi);

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      <div 
        className="
          bg-white 
          rounded-2xl sm:rounded-3xl 
          shadow-xl sm:shadow-2xl 
          border border-gray-100/80
          overflow-hidden
          mx-auto
          max-w-[95%] sm:max-w-[92%] md:max-w-3xl lg:max-w-4xl
        "
      >
        {/* Header section */}
        <div className="bg-linear-to-r from-[#e6fff4] via-[#e0ffe8] to-[#d4ffdd] px-5 sm:px-7 md:px-8 pt-5 pb-4 sm:pb-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#0f5c38]">
            Real-time AQI
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mt-1 font-medium">
            {city}
          </p>
          <p className="text-xs sm:text-sm text-gray-500 italic mt-0.5">
            Last Updated: {time}
          </p>
        </div>

        {/* Horizontal main content – takes most of the space */}
        <div className="
          px-5 sm:px-7 md:px-10 
          py-6 sm:py-8 md:py-10
          flex 
          items-center 
          justify-between 
          gap-4 sm:gap-6 md:gap-10 lg:gap-16
        ">
          {/* AQI number – big & prominent */}
          <div className="shrink-0 text-center min-w-20 sm:min-w-25">
            <div className="text-xs sm:text-sm font-medium text-gray-600 tracking-wide">
              LIVE AQI
            </div>
            <div className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black ${color} leading-none`}>
              {aqi}
            </div>
          </div>

          {/* Air Quality label */}
          <div className="flex-1 text-center min-w-0">
            <div className="text-xs sm:text-sm md:text-base font-medium text-gray-600 tracking-wide">
              AIR QUALITY
            </div>
            <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ${color} leading-tight mt-1 sm:mt-2`}>
              {label}
            </div>
          </div>

          {/* Visual (image / emoji) */}
          <div className="shrink-0">
            <img
              src={image}
              alt={label}
              className="
                w-20 h-20 
                sm:w-28 sm:h-28 
                md:w-32 md:h-32 
                lg:w-40 lg:h-40 
                object-contain 
                drop-shadow-md
              "
            />
          </div>
        </div>

        {/* Optional small hint row at bottom */}
        <div className="px-5 sm:px-7 md:px-8 py-3 sm:py-4 bg-gray-50/70 text-center text-xs sm:text-sm text-gray-600 border-t border-gray-100">
          {aqi <= 100
            ? "Air quality is acceptable — outdoor activities are generally fine."
            : "Try to limit long or heavy outdoor activity today."}
        </div>
      </div>
    </div>
  );
};

export default AQICard;