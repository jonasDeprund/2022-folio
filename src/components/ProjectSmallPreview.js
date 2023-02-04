import React from 'react';

const ProjectSmallPreview = (project) => {
  return (
    <div>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <img src={project.icon} alt="arrow icon" />
    </div>
  );
};

export default ProjectSmallPreview;
