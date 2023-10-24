import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

const SocialMediaComponent: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-20">Touch With Me</h2>
      <div className="flex justify-center items-center space-x-4 mb-20">
        <a
          href="https://www.facebook.com/menukar.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/MenukaRisith"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/menuka_risith"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
        </a>
        <a
          href="https://github.com/MenukaRisith"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-3 rounded-full hover:bg-gray-900 transition duration-300"
        >
          <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" />
        </a>
        <a
          href="https://www.youtube.com/@MenukaRisith"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition duration-300"
        >
          <FontAwesomeIcon icon={faYoutube} className="text-white text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaComponent;
