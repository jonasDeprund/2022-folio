import React from 'react';

import imageNexity from '../images/thumb-nexity.png';
import imageBanque from '../images/thumb-banque.png';
import imageBonduelle from '../images/thumb-bonduelle.png';
import imageDanone from '../images/thumb-danone.png';
import imageEloGroup from '../images/thumb-elo-group.png';
import imageAhp from '../images/thumb-ahp.png';
import imageSoBrico from '../images/thumb-so-brico.png';
import imageSlate from '../images/thumb-slate.png';
import imageTasteFrance from '../images/thumb-taste-france.png';
import iconArrow from '../svg/arrow.svg';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__section cell-start-0 cell-end-12">
        <div className="row">
          {/* Projet 1 */}
          <div className="cell-start-0 cell-end-12 cell-start-0-m cell-end-12-m">
            <a
              href="https://www.behance.net/gallery/122497029/Nexity-Corporate-website-%28Pitch%29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project__content">
                <div className="project__content-image">
                  <img
                    className="project__image"
                    src={imageTasteFrance}
                    alt="Taste France Magazine"
                  />
                </div>
                <div className="project__description">
                  <h3 className="text-h2">Taste France Magazine</h3>
                  <img className="project__icon" src={iconArrow}></img>
                </div>
              </div>
            </a>
          </div>

          {/* Projet 1 */}
          <div className="cell-start-0 cell-end-6 cell-start-0-m cell-end-12-m">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="project__content">
                <div className="project__content-image">
                  <img
                    className="project__image"
                    src={imageSlate}
                    alt="Nexity"
                  />
                </div>
                <div className="project__description">
                  <h3 className="text-h2">Slate</h3>
                  <img className="project__icon" src={iconArrow}></img>
                </div>
              </div>
            </a>
          </div>

          {/* Projet 1 */}
          <div className="cell-start-6 cell-end-12 cell-start-0-m cell-end-12-m">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="project__content">
                <div className="project__content-image">
                  <img
                    className="project__image"
                    src={imageSlate}
                    alt="Nexity"
                  />
                </div>
                <div className="project__description">
                  <h3 className="text-h2">Slate</h3>
                  <img className="project__icon" src={iconArrow}></img>
                </div>
              </div>
            </a>
          </div>

          {/* Projet 1 */}
          <div className="cell-start-0 cell-end-6 cell-start-0-m cell-end-12-m">
            <a
              href="https://www.behance.net/gallery/122497029/Nexity-Corporate-website-%28Pitch%29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project__content">
                <div className="project__content-image">
                  <img
                    className="project__image"
                    src={imageBanque}
                    alt="Banque de France"
                  />
                </div>
                <div className="project__description">
                  <h3 className="text-h2">Banque de France</h3>
                  <img className="project__icon" src={iconArrow}></img>
                </div>
              </div>
            </a>
          </div>

          {/* Projet 2 */}
          <div className="cell-start-6 cell-end-12 cell-start-0-m cell-end-12-m">
            <a
              href="https://www.behance.net/gallery/132516291/Bonduelle-Corporate-Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project__content">
                <div className="project__content-image">
                  <img
                    className="project__image"
                    src={imageBonduelle}
                    alt="Bonduelle"
                  />
                </div>
                <div className="project__description">
                  <h3 className="text-h2">Bonduelle</h3>
                  <img className="project__icon" src={iconArrow}></img>
                </div>
              </div>
            </a>
          </div>
          {/* Projet 3 */}
          <div className="cell-start-0 cell-end-6 cell-start-0-m cell-end-12-m">
            <a
              href="https://www.behance.net/gallery/124320911/Danone-Annual-report-2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project__content">
                <div className="project__content-image">
                  <img
                    className="project__image"
                    src={imageDanone}
                    alt="Danone"
                  />
                </div>
                <div className="project__description">
                  <h3 className="text-h2">Danone</h3>
                  <img className="project__icon" src={iconArrow}></img>
                </div>
              </div>
            </a>
          </div>
          {/* Projet 4 */}
          <div className="cell-start-6 cell-end-12 cell-start-0-m cell-end-12-m">
            <a
              href="https://www.behance.net/gallery/131689655/Elo-Group-Corporate-Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project__content">
                <div className="project__content-image">
                  <img
                    className="project__image"
                    src={imageEloGroup}
                    alt="Elo Group"
                  />
                </div>
                <div className="project__description">
                  <h3 className="text-h2">Elo Group</h3>
                  <img className="project__icon" src={iconArrow}></img>
                </div>
              </div>
            </a>
          </div>
          {/* Projet 5 */}
          <div className="cell-start-0 cell-end-6 cell-start-0-m cell-end-12-m">
            <a
              href="https://www.behance.net/gallery/98421997/American-Hospital-of-Paris-Event-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project__content">
                <div className="project__content-image">
                  <img className="project__image" src={imageAhp} alt="AHP" />
                </div>
                <div className="project__description">
                  <h3 className="text-h2">AHP</h3>
                  <img className="project__icon" src={iconArrow}></img>
                </div>
              </div>
            </a>
          </div>
          {/* Projet 6 */}
          <div className="cell-start-6 cell-end-12 cell-start-0-m cell-end-12-m">
            <a
              href="https://www.behance.net/gallery/122495107/Sobrico-E-commerce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project__content">
                <div className="project__content-image">
                  <img
                    className="project__image"
                    src={imageSoBrico}
                    alt="So Brico"
                  />
                </div>
                <div className="project__description">
                  <h3 className="text-h2">So Brico</h3>
                  <img className="project__icon" src={iconArrow}></img>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
