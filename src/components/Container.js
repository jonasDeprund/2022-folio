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
            className="image-gif cell-start-1 cell-end-4"
            src={imageNexity}
            alt=""
          />
        </div>
      </div>
    </main>
  );
}

export default Container;
