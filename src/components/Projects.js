import React from 'react';

import imageNexity from '../images/thumb-nexity.png';
import imageBonduelle from '../images/thumb-bonduelle.png';
import imageDanone from '../images/thumb-danone.png';
import imageEloGroup from '../images/thumb-elogroup.png';
import imageAhp from '../images/thumb-ahp.png';
import imageSoBrico from '../images/thumb-sobrico.png';

const Projects = () => {
  return (
    <div className="row">
      <div className="cell-start-0 cell-end-6">
        <img src={imageNexity} alt="Nexity" />
        <div className="">
          <h3 className="text-h2">Nexity</h3>
        </div>
      </div>
      <div className="cell-start-6 cell-end-12">
        <img src={imageBonduelle} alt="Bonduelle" />
        <div className="">
          <h3 className="text-h2">Bonduelle</h3>
        </div>
      </div>
      <div className="cell-start-0 cell-end-6">
        <img src={imageDanone} alt="Danone" />
        <div className="">
          <h3 className="text-h2">Danone</h3>
        </div>
      </div>
      <div className="cell-start-6 cell-end-12">
        <img src={imageEloGroup} alt="Elo Group" />
        <div className="">
          <h3 className="text-h2">Elo Group</h3>
        </div>
      </div>
      <div className="cell-start-0 cell-end-6">
        <img src={imageAhp} alt="AHP" />
        <div className="">
          <h3 className="text-h2">AHP</h3>
        </div>
      </div>
      <div className="cell-start-6 cell-end-12">
        <img src={imageSoBrico} alt="So Brico" />
        <div className="">
          <h3 className="text-h2">So Brico</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
