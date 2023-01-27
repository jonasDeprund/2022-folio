import React from 'react';

const ProjectSmallPreview = (project) => {
  return (
    <div>
      <img
        src={project.image}
        alt={project.title}
        style={{ width: '100%', height: 'auto', aspectRatio: 3 / 2 }}
      />
      <h3>{project.title}</h3>
      <img
        src={project.icon}
        alt="arrow icon"
        style={{ width: '20px', height: 'auto' }}
      />
    </div>
  );
};
