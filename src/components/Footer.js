import React from 'react';
import iconBehance from '../svg/behance.svg';
import iconDribbble from '../svg/dribbble.svg';
// import capture from '../svg/capture.png';

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__inner">
        <div class="row">
          <div class="cell-6 cell-12-tp front">
            <a
              className="icon"
              src={iconBehance}
              //href="https://www.linkedin.com/in/jonas-deprund-54853562/"
            ></a>
            <a
              className="icon"
              src={iconDribbble}
              //href="https://www.behance.net/jonasdeprund"
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
