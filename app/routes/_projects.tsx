import React from 'react';
import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';
import ProjectsList from '~/components/projects';

const Services: React.FC = () => {
  return (
    <div>
      <title>Projects</title>
      <Navbar />
      <ProjectsList />
      <Footer />
    </div>
  );
};

export default Services;