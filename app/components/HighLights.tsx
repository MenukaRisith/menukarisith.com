import React from 'react';

const Highlights = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto mb-1">
        <h2 className="text-3xl font-semibold text-center text-gray-800 font-varela-round mb-4 ml-4">Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-md pt-10">
            <div className="mb-2">
              <img
                src="https://res.cloudinary.com/dyjaqv0t2/image/upload/v1697383448/eleventasticsolutions_dmqqte.png"
                alt="Highlight 2"
                className="w-full h-40 object-cover rounded"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 font-roboto pt-2">First Startup Company when I was 14</h3>
            <p className="text-gray-600 font-varela-round pt-2">
              Guiding brands to digital success! I lead a talented team of creators, tech enthusiasts, and strategic minds at Eleventastic Solutions. We're passionate about crafting unforgettable digital experiences, from eye-catching graphics to cutting-edge web development, broadcasting, and innovative campaigns that bridge the digital and physical worlds. Let's redefine your brand's online presence and make it unforgettable. 🌐💡
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Varela+Round&display=swap');
</style>
