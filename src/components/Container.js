import React from 'react';
import imageNexity from '../images/nexity.gif';
import imageBonduelle from '../images/bonduelle.gif';
import imageDanone from '../images/danone.gif';
import imageElo from '../images/elo.gif';

function Container() {
  return (
    <main class="wrapper-main">
      {/* text */}
      <div className="container-title">
        <div class="row">
          <h1 class="text-h1 cell-start-0 cell-end-12 cell-start-0-m cell-end-12-m">
            Hello. I am an interactive designer based in Paris.
            <br />I worked for
            <span class="text-h1 button">Nexity</span>
            <span class="text-h1 button">Bonduelle</span>
            <span class="text-h1 button">Danone</span>
            <span class="text-h1 button">Elo Group</span>
            <span class="text-h1 button">+</span>
            <br />
            <br />
            Feel free to contact me
          </h1>
        </div>
      </div>
      {/* images */}
      <div className="container-images">
        <div className="row">
          <img
            className="image-gif cell-start-6 cell-end-10"
            src={imageNexity}
            alt=""
          />
          <img
            className="image-gif cell-start-1 cell-end-5"
            src={imageBonduelle}
            alt=""
          />
          <img
            className="image-gif cell-start-4 cell-end-8"
            src={imageDanone}
            alt=""
          />
          <img
            className="image-gif cell-start-8 cell-end-12"
            src={imageElo}
            alt=""
          />
        </div>
      </div>
    </main>
  );
}

export default Container;
