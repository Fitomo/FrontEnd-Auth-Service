import React, { PropTypes } from 'react';

const About = ({ aboutUs }) => (
  <section className={aboutUs}>
    <h1>About us</h1>
    <div>
      <div>
        <span>Aaron</span>
        <img src="" alt="Aaron" />
      </div>
      <div>
        <span> Ben</span>
        <img src="" alt="Ben" />
      </div>
      <div>
        <span>Chris</span>
        <img src="" alt="Chris" />
      </div>
      <div>
        <span>Sehoon</span>
        <img src="" alt="Sehoon" />
      </div>
    </div>
  </section>
);

export default About;

About.propTypes = {
  aboutUs: PropTypes.string.isRequired,
};
