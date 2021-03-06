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
          <div class="cell-6 cell-12-tp">
            <div className="social-container">
              <p className="text-h2">Follow me</p>
              <a
                className="icon"
                href="https://dribbble.com/jonasdeprund"
                target="_blank"
              >
                <img src={iconDribbble} alt={iconDribbble} />
              </a>
              <a
                className="icon"
                href="https://www.behance.net/jonasdeprund"
                target="_blank"
              >
                <img src={iconBehance} alt={iconBehance} />
              </a>
              <a
                className="icon"
                href="https://github.com/jonasDeprund"
                target="_blank"
              >
                <img src={iconGithub} alt={iconGithub} />
              </a>
              <a
                className="icon"
                href="https://vimeo.com/user22875160"
                target="_blank"
              >
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
