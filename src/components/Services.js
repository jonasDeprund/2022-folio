import React from 'react';

const Services = (props) => {
  return (
    <div>
      <div className="row">
        <h2 className="text-h1 cell-start-0 cell-end-12">What I do</h2>
      </div>

      <div className="row">
        <div className="services__content cell-start-0 cell-end-6">
          <div className="services__row">
            <p>Identity</p>
            <p>Website</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="services__row cell-start-6 cell-end-12">
          <div className="services__row">
            <p>Motion</p>
            <p>Illustration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
