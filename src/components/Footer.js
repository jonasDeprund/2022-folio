import React from 'react';
import iconBehance from '../svg/behance.svg';
import iconDribbble from '../svg/dribbble.svg';
import iconGithub from '../svg/github.svg';
import iconVimeo from '../svg/vimeo.svg';

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__inner">
        <div class="row">
          <div class="cell-6 cell-12-tp front">
            <div className="list-icon">
              <a className="icon">
                <img src={iconDribbble} alt={iconDribbble} />
              </a>
              <a className="icon">
                <img src={iconBehance} alt={iconBehance} />
              </a>
              <a className="icon">
                <img src={iconGithub} alt={iconGithub} />
              </a>
              <a className="icon">
                <img src={iconVimeo} alt={iconVimeo} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
