import React from 'react';

const CompanyWorkedWith = () => {
  const logos = [
    {
      url: 'https://res.cloudinary.com/dyjaqv0t2/image/upload/v1697383448/eleventasticsolutions-transparent_nlmp4y.png',
      alt: 'ElevenTasticSolutions',
    },
    {
      url: 'https://res.cloudinary.com/dyjaqv0t2/image/upload/v1697383448/genixplay-transparent_z8o9od.png',
      alt: 'GenixPlay',
    },
    {
      url: '',
      alt: 'TheSriCom',
    },
    {
        url: 'https://res.cloudinary.com/dyjaqv0t2/image/upload/v1697383592/Asset_1_3x_cgjav8.png',
        alt: 'EcloudEsports',
      },
  ];

  return (
    <div className="company-worked-with mt-10 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Trusted</h2>
      <div className="slider-content mx-auto inline-block mt-20 mb-20">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.url}
            alt={logo.alt}
            className="logo inline-block w-100 h-10 mr-10" // Add margin right to create space between logos
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyWorkedWith;
