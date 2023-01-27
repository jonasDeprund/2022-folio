import React from 'react';
import ProjectSmallPreview from '../components/ProjectSmallPreview';

const ContainerProject = (projects) => {
  return (
    <div>
      <div className="container-project cell-start-0 cell-end-12">
        <ProjectSmallPreview

        />
        <ProjectSmallPreview
        />
        <ProjectSmallPreview
          image="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
          title="Project 1"
        />
        <ProjectSmallPreview
          image="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
          title="Project 1"
        />
        <ProjectSmallPreview
          image="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
          title="Project 1"
        />{' '}
        <ProjectSmallPreview
          image="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
          title="Project 1"
        />
        <ProjectSmallPreview
          image="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
          title="Project 1"
        />
      </div>
    </div>
  );
};

export default ContainerProject;
