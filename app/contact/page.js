import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#f8fffb] pt-20 pb-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#116345] mb-8 text-center">
          Get in Touch
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
          <p className="text-lg text-gray-700 mb-8 text-center">
            Have a question about air quality, found a bug, or want to suggest a new feature?<br />
            We'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="text-center">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-[#116345] mb-2">Email</h3>
              <p className="text-gray-600 break-all">
                nakul.aqi.checker@gmail.com
                {/* ← change to your real email if different */}
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🐙</div>  {/* GitHub octopus emoji */}
              <h3 className="text-xl font-semibold text-[#116345] mb-2">GitHub</h3>
              <p className="text-gray-600">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#116345] hover:underline"
                >
                  github.com/yourusername
                </a>
                {/* ← replace 'yourusername' with your actual GitHub username */}
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[#116345] mb-6">
              Quick Message
            </h3>
            <p className="text-gray-600 mb-8">
              For now just drop us an email — we're a small project and read every message personally.<br />
              You can also open an issue or discussion on GitHub if it's code-related!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="mailto:nakul.aqi.checker@gmail.com"
                className="inline-block bg-[#116345] text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#0e5238] transition-colors"
              >
                Send Email →
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-900 transition-colors"
              >
                Visit GitHub →
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-12 text-sm">
          Thank you for caring about the air we breathe 🌿
        </p>
      </div>
    </div>
  );
};

export default Contact;