import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f8fffb] pt-20 pb-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#116345] mb-8 text-center">
          About Our AQI Checker
        </h1>

        <div className="prose prose-lg max-w-none text-gray-800">
          <p className="mb-6">
            Welcome to our <strong>AQI Checker</strong> — a simple tool built to help you stay informed about the air quality around you.
          </p>

          <p className="mb-6">
            We show real-time Air Quality Index (AQI) values so you can quickly understand whether the air is safe for outdoor activities, especially for children, elderly people, or anyone with breathing problems.
          </p>

          <h2 className="text-3xl font-semibold text-[#116345] mt-10 mb-5">
            What is AQI?
          </h2>
          <p className="mb-6">
            The Air Quality Index (AQI) tells you how clean or polluted the air is, and what health effects you might experience within a few hours or days.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-[#e6fff4] text-[#116345]">
                  <th className="border border-gray-300 px-4 py-3 text-left">AQI Range</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Category</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Color</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Health Concern</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                <tr className="bg-green-50">
                  <td className="border px-4 py-3">0–50</td>
                  <td className="border px-4 py-3 font-medium">Good</td>
                  <td className="border px-4 py-3 text-green-700">Green</td>
                  <td className="border px-4 py-3">Air quality is satisfactory — little or no risk</td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="border px-4 py-3">51–100</td>
                  <td className="border px-4 py-3 font-medium">Moderate</td>
                  <td className="border px-4 py-3 text-yellow-700">Yellow</td>
                  <td className="border px-4 py-3">Acceptable, but some people may be sensitive</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="border px-4 py-3">101–150</td>
                  <td className="border px-4 py-3 font-medium">Unhealthy for Sensitive Groups</td>
                  <td className="border px-4 py-3 text-orange-700">Orange</td>
                  <td className="border px-4 py-3">Sensitive groups may experience effects</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="border px-4 py-3">151–200</td>
                  <td className="border px-4 py-3 font-medium">Unhealthy</td>
                  <td className="border px-4 py-3 text-red-700">Red</td>
                  <td className="border px-4 py-3">Everyone may begin to experience effects</td>
                </tr>
                <tr className="bg-purple-50">
                  <td className="border px-4 py-3">201–300</td>
                  <td className="border px-4 py-3 font-medium">Very Unhealthy</td>
                  <td className="border px-4 py-3 text-purple-700">Purple</td>
                  <td className="border px-4 py-3">Health alert — serious effects for everyone</td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="border px-4 py-3">301+</td>
                  <td className="border px-4 py-3 font-medium">Hazardous</td>
                  <td className="border px-4 py-3 text-red-900">Maroon</td>
                  <td className="border px-4 py-3">Emergency conditions — everyone at risk</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-semibold text-[#116345] mt-10 mb-5">
            Our Goal
          </h2>
          <p>
            We want to make air quality information easy to access and understand — especially in cities like Delhi where pollution can change quickly.
          </p>
          <p className="mt-4">
            Built with ❤️ in India • Data powered by reliable APIs
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;