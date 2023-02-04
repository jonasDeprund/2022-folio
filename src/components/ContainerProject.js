import React from 'react';
import ProjectSmallPreview from '../components/ProjectSmallPreview';

const ContainerProject = (projects) => {
  return (
    <div>
      <div className="container-project cell-start-0 cell-end-12">
        <ProjectSmallPreview />
      </div>
    </div>
  );
};

export default ContainerProject;
