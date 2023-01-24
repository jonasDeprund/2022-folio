import React from 'react';

const ProjectSmallPreview = (props) => {
  return (
    <div>
      <img
        src={props.image}
        alt={props.title}
        style={{ width: '100%', height: 'auto', aspectRatio: 3 / 2 }}
      />
      <h3>{props.title}</h3>
      <img
        src={props.icon}
        alt="arrow icon"
        style={{ width: '20px', height: 'auto' }}
      />
    </div>
  );
};

export default ProjectSmallPreview;
