import React from 'react';
import Navbar from '../components/Navbar';
import Aboutt from '~/components/about';
import Timeline from '~/components/field';
import Footer from '~/components/Footer';
import SocialStats from '~/components/stats';

const About: React.FC = () => {
  return (
    <div>
      <title>About</title>
      <Navbar />
      <Aboutt />
      <Timeline />
      <Footer />
    </div>
  );
};

export default About;
