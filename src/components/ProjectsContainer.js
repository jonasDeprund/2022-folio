import React, { useState } from 'react';

// Import d'images
import imageNexity from '../images/thumb-nexity.png';
import imageNexityHovered from '../images/thumb-nexity-hovered.png';

import imageBonduelle from '../images/thumb-bonduelle.png';
import imageBonduelleHovered from '../images/thumb-bonduelle-hovered.png';
import imageDanone from '../images/thumb-danone.png';
import imageDanoneHovered from '../images/thumb-danone-hovered.png';
import imageElo from '../images/thumb-elo.png';
import imageEloHovered from '../images/thumb-elo-hovered.png';
import imageAhp from '../images/thumb-ahp.png';
import imageAhpHovered from '../images/thumb-ahp-hovered.png';
import imageSobrico from '../images/thumb-sobrico.png';
import imageSobricoHovered from '../images/thumb-sobrico-hovered.png';
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
      link: 'https://www.behance.net/gallery/170954261/Taste-France-Magazine',
      image: {
        default: imageTasteFrance,
        hovered: imageTasteFranceHovered,
      },
    },
    {
      id: 1,
      title: 'Nexity',
      link: 'https://www.behance.net/gallery/122497029/Nexity-Corporate-website-(Pitch)',
      image: {
        default: imageNexity,
        hovered: imageNexityHovered,
      },
    },
    {
      id: 2,
      title: 'Bonduelle',
      link: 'https://www.behance.net/gallery/132516291/Bonduelle-Corporate-Website',
      image: {
        default: imageBonduelle,
        hovered: imageBonduelleHovered,
      },
    },
    {
      id: 3,
      title: 'Danone',
      link: 'https://www.behance.net/gallery/124320911/Danone-Annual-report-2020',
      image: {
        default: imageDanone,
        hovered: imageDanoneHovered,
      },
    },
    {
      id: 4,
      title: 'Elo Group',
      link: 'https://www.behance.net/gallery/131689655/Elo-Group-Corporate-Website',
      image: {
        default: imageElo,
        hovered: imageEloHovered,
      },
    },
    {
      id: 5,
      title: 'AHP Campaign',
      link: 'https://www.behance.net/gallery/98421997/American-Hospital-of-Paris-Event-website',
      image: {
        default: imageAhp,
        hovered: imageAhpHovered,
      },
    },
    {
      id: 6,
      title: 'So Brico',
      link: 'https://www.behance.net/gallery/122495107/Sobrico-E-commerce',
      image: {
        default: imageSobrico,
        hovered: imageSobricoHovered,
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
          <div className="cell-start-0 cell-end-6 cell-start-0-m cell-end-12-m">
            <ProjectSmall
              key={projectData[5].id}
              title={projectData[5].title}
              link={projectData[5].link}
              image={projectData[5].image}
            />
          </div>
          <div className="cell-start-6 cell-end-12 cell-start-0-m cell-end-12-m">
            <ProjectSmall
              key={projectData[6].id}
              title={projectData[6].title}
              link={projectData[6].link}
              image={projectData[6].image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
