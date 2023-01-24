import React from 'react';
import Background from '../components/Background';
// Import image

function Header() {
  // JS

  // RETURN
  return (
    <div class="wrapper-header">
      {/* text */}
      <div className="container-title">
        <div class="row">
          <h1 class="text-h1 text-h1-m cell-start-0 cell-end-12 cell-start-0-m cell-end-12-m">
            Hello,
            <br></br>I am an interactive designer based in Paris.
            <br></br>I craft identities and websites.
          </h1>
        </div>
      </div>
      <Background />
    </div>
  );
}

export default Header;
