import React, { Component } from 'react';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: 'Projet 1',
          image: 'https://via.placeholder.com/150',
          description: 'Description du projet 1',
        },
        {
          name: 'Projet 2',
          image: 'https://via.placeholder.com/150',
          description: 'Description du projet 2',
        },
        {
          name: 'Projet 3',
          image: 'https://via.placeholder.com/150',
          description: 'Description du projet 3',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.projects.map((project) => (
          <div key={project.name}>
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Thumbnail;
