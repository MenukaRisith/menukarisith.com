import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string; // URL to the project image
}

const projectList: Project[] = [
  {
    id: 1,
    title: 'Fauxica Landing Page',
    description: 'Description for Project 1.',
    imageUrl: 'https://res.cloudinary.com/dyjaqv0t2/image/upload/v1697732143/fauxica_xr77d5.png', // Replace with your image URL
  },

];

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto my-10 mt-20 mb-40">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-10">
        {projectList.map((project) => (
          <div key={project.id} className="bg-white rounded shadow p-4">
            {project.imageUrl && (
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover mb-2" />
            )}
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
