import React, { PropTypes } from 'react';
import aaron from '../../../Team/aaron-freidus.jpg';
import ben from '../../../Team/ben-roa.jpg';
import chris from '../../../Team/chris-ng.jpg';
import sehoon from '../../../Team/sehoon-park.jpg';
import gitlogo from '../../../Team/GitHub-Mark-64px.png';

const About = ({ aboutUs }) => (
  <section className={aboutUs}>
    <h1>About us</h1>
    <div>
      <div>
        <span>Aaron</span>
        <img src={aaron} alt="Aaron" />
        <p>Aaron is a software engineer passionate about creating software that optimizes the way we perform daily tasks. </p>
      </div>
      <div>
        <span>Ben</span>
        <img src={ben} alt="Ben" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur veritatis laboriosam debitis quo, architecto sed minus fugiat iusto vel repudiandae qui quasi quos porro vero illum in, labore fuga! Quod.</p>
      </div>
      <div>
        <span>Chris</span>
        <img src={chris} alt="Chris" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum doloribus similique temporibus numquam quae possimus voluptas quidem neque voluptatibus, nulla porro eveniet veritatis, quo voluptatem at ut suscipit enim?</p>
      </div>
      <div>
        <span>Sehoon</span>
        <img src={sehoon} alt="Sehoon" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, laboriosam? Earum numquam laudantium fuga rem sunt at officiis, distinctio labore qui. Ipsa assumenda neque voluptatibus, modi! Dolorum laborum illum, totam!</p>
      </div>
    </div>
  </section>
);

export default About;

About.propTypes = {
  aboutUs: PropTypes.string.isRequired,
};

// <a href="http://www.github.com/benroars"><img border="0" alt="W3Schools" src={gitlogo} width="50" height="50" /></a>

