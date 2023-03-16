import React from 'react';

const About = (props) => {
  return (
    <div>
      <div className="row">
        <h2 className="text-h1 cell-start-0 cell-end-12">About</h2>
      </div>

      <div className="row">
        <div className="about__content cell-start-0 cell-end-12">
          <div className="about__row">
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed
              consectetur. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
