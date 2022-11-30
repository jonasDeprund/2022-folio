import React from 'react';
import { useState } from 'react';

// Import image
import imageNexity from '../images/nexity.gif';
import imageBonduelle from '../images/bonduelle.gif';
import imageDanone from '../images/danone.gif';
import imageElo from '../images/elo.gif';

function Container() {
  // JS
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);

  // RETURN
  return (
    <main class="wrapper-main">
      {/* text */}
      <div className="container-title">
        <div class="row">
          <h1 class="text-h1 text-h1-m cell-start-0 cell-end-12 cell-start-0-m cell-end-12-m">
            Hello. I am an interactive designer based in Paris.
            <br />I worked for
            <a
              rel="noreferrer"
              href="https://www.behance.net/gallery/122497029/Nexity-Corporate-website-%28Pitch%29"
              target="_blank"
            >
              <span
                onMouseEnter={() => setIsShown1(true)}
                onMouseLeave={() => setIsShown1(false)}
                class="text-h1 text-h1-m button"
              >
                Nexity
              </span>
            </a>
            <a
              rel="noreferrer"
              href="https://www.behance.net/gallery/132516291/Bonduelle-Corporate-Website"
              target="_blank"
            >
              <span
                onMouseEnter={() => setIsShown2(true)}
                onMouseLeave={() => setIsShown2(false)}
                class="text-h1 text-h1-m button"
              >
                Bonduelle
              </span>
            </a>
            <a
              rel="noreferrer"
              href="https://www.behance.net/gallery/124320911/Danone-Annual-report-2020"
              target="_blank"
            >
              <span
                onMouseEnter={() => setIsShown3(true)}
                onMouseLeave={() => setIsShown3(false)}
                class="text-h1 text-h1-m button"
              >
                Danone
              </span>
            </a>
            <a
              rel="noreferrer"
              href="https://www.behance.net/gallery/131689655/Elo-Group-Corporate-Website"
              target="_blank"
            >
              <span
                onMouseEnter={() => setIsShown4(true)}
                onMouseLeave={() => setIsShown4(false)}
                class="text-h1 text-h1-m button"
              >
                Elo Group
              </span>
            </a>
            <a
              rel="noreferrer"
              href="https://www.behance.net/jonasdeprund"
              target="_blank"
            >
              <span class="text-h1 text-h1-m button">+</span>
            </a>
            <br />
            <p className="contact">Feel free to contact me</p>
          </h1>
        </div>
      </div>
      {/* images */}
      <div className="container-images">
        <div className="bloc-image image-1">
          <div className="row">
            {isShown1 && (
              <img
                className="image-gif cell-start-5 cell-end-10"
                src={imageNexity}
                alt=""
              />
            )}
          </div>
        </div>
        <div className="bloc-image image-2">
          <div className="row">
            {isShown2 && (
              <img
                className="image-gif cell-start-0 cell-end-5"
                src={imageBonduelle}
                alt=""
              />
            )}
          </div>
        </div>
        <div className="bloc-image image-3">
          <div className="row">
            {isShown3 && (
              <img
                className="image-gif cell-start-3 cell-end-8"
                src={imageDanone}
                alt=""
              />
            )}
          </div>
        </div>
        <div className="bloc-image image-4">
          <div className="row">
            {isShown4 && (
              <img
                className="image-gif cell-start-7 cell-end-12"
                src={imageElo}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Container;
