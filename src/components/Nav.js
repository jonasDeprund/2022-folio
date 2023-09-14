import React from 'react';

function Nav() {
  return (
    <nav className="navigation">
      <ul className="row">
        <div className="navigation__item cell-start-0 cell-end-12">
          <li className="">
            <a className="text-h2 text-h2-m" href="index.html">
              Jonas Deprund
            </a>
          </li>
          <li className="">
            <a className="contact button text-h2" href="index.html">
              contact
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
