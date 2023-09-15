import React, { useState } from 'react';

// Import d'images
import imageNexity from '../images/thumb-nexity.png';
import imageNexityHovered from '../images/thumb-nexity-hovered.png';
import imageBanque from '../images/thumb-banque.png';
import imageBanqueHovered from '../images/thumb-banque-hovered.png';
import imageBonduelle from '../images/thumb-bonduelle.png';
import imageBonduelleHovered from '../images/thumb-bonduelle-hovered.png';
import imageDanone from '../images/thumb-danone.png';
import imageEloGroup from '../images/thumb-elo-group.png';
import imageAhp from '../images/thumb-ahp.png';
import imageSoBrico from '../images/thumb-so-brico.png';
import imageSlate from '../images/thumb-slate.png';
import imageSlateHovered from '../images/thumb-slate-hovered.png';
import imageTasteFrance from '../images/thumb-taste-france.png';
import imageTasteFranceHovered from '../images/thumb-taste-france-hovered.png';
import iconArrow from '../svg/arrow.svg';

// Import component
import ProjectSmall from './ProjectSmall';
import ProjectLarge from './ProjectLarge';

const ProjectsContainer = () => {
  const projectData = [
    {
      id: 0,
      title: 'taste France',
      link: '#',
      image: {
        default: imageTasteFrance,
        hovered: imageTasteFranceHovered,
      },
    },
    {
      id: 1,
      title: 'Slate',
      link: '#',
      image: {
        default: imageSlate,
        hovered: imageSlateHovered,
      },
    },
    {
      id: 2,
      title: 'Nexity',
      link: '#',
      image: {
        default: imageNexity,
        hovered: imageNexityHovered,
      },
    },
    {
      id: 3,
      title: 'Banque de France',
      link: '#',
      image: {
        default: imageBanque,
        hovered: imageBanqueHovered,
      },
    },
    {
      id: 4,
      title: 'Bonduelle',
      link: '#',
      image: {
        default: imageBonduelle,
        hovered: imageBonduelleHovered,
      },
    },
  ];

  return (
    <div className="projects">
      <div className="projects__section">
        <div className="row">
          <div className="cell-start-0 cell-end-12 cell-start-0-m cell-end-12-m">
            <ProjectLarge
              key={projectData[0].id}
              title={projectData[0].title}
              link={projectData[0].link}
              image={projectData[0].image}
            />
          </div>
          <div className="cell-start-0 cell-end-6 cell-start-0-m cell-end-12-m">
            <ProjectSmall
              key={projectData[1].id}
              title={projectData[1].title}
              link={projectData[1].link}
              image={projectData[1].image}
            />
          </div>
          <div className="cell-start-6 cell-end-12 cell-start-0-m cell-end-12-m">
            <ProjectSmall
              key={projectData[2].id}
              title={projectData[2].title}
              link={projectData[2].link}
              image={projectData[2].image}
            />
          </div>
          <div className="cell-start-0 cell-end-6 cell-start-0-m cell-end-12-m">
            <ProjectSmall
              key={projectData[3].id}
              title={projectData[3].title}
              link={projectData[3].link}
              image={projectData[3].image}
            />
          </div>
          <div className="cell-start-6 cell-end-12 cell-start-0-m cell-end-12-m">
            <ProjectSmall
              key={projectData[4].id}
              title={projectData[4].title}
              link={projectData[4].link}
              image={projectData[4].image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
