import React from 'react';

import imageNexity from '../images/thumb-nexity.png';
import imageBonduelle from '../images/thumb-bonduelle.png';
import imageDanone from '../images/thumb-danone.png';
import imageEloGroup from '../images/thumb-elogroup.png';
import imageAhp from '../images/thumb-ahp.png';
import imageSoBrico from '../images/thumb-sobrico.png';
import iconArrow from '../svg/arrow.svg';

const Projects = () => {
  return (
    <div className="row">
      <div className="cell-start-0 cell-end-6">
        <div className="project__content">
          <img className="project__image" src={imageNexity} alt="Nexity" />
          <div className="project__description">
            <h3 className="text-h2">Nexity</h3>
            <img className="project__icon" src={iconArrow}></img>
          </div>
        </div>
      </div>
      <div className="cell-start-6 cell-end-12">
        <div className="project__content">
          <img
            className="project__image"
            src={imageBonduelle}
            alt="Bonduelle"
          />
          <div className="project__description">
            <h3 className="text-h2">Bonduelle</h3>
            <img className="project__icon" src={iconArrow}></img>
          </div>
        </div>
      </div>
      <div className="cell-start-0 cell-end-6">
        <div className="project__content">
          <img className="project__image" src={imageDanone} alt="Danone" />
          <div className="project__description">
            <h3 className="text-h2">Danone</h3>
            <img className="project__icon" src={iconArrow}></img>
          </div>
        </div>
      </div>
      <div className="cell-start-6 cell-end-12">
        <div className="project__content">
          <img className="project__image" src={imageEloGroup} alt="Elo Group" />
          <div className="project__description">
            <h3 className="text-h2">Elo Group</h3>
            <img className="project__icon" src={iconArrow}></img>
          </div>
        </div>
      </div>
      <div className="cell-start-0 cell-end-6">
        <div className="project__content">
          <img className="project__image" src={imageAhp} alt="AHP" />
          <div className="project__description">
            <h3 className="text-h2">AHP</h3>
            <img className="project__icon" src={iconArrow}></img>
          </div>
        </div>
      </div>
      <div className="cell-start-6 cell-end-12">
        <div className="project__content">
          <img className="project__image" src={imageSoBrico} alt="So Brico" />
          <div className="project__description">
            <h3 className="text-h2">So Brico</h3>
            <img className="project__icon" src={iconArrow}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
