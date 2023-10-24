import React from 'react';

const ContactFr: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 placeholder-gray-400"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium py-3 px-6 rounded-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFr;
