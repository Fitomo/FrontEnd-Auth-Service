import React from 'react';
import defaultFitomo from '../../images/fitomo-home.png';
import {
  fitomoPic,
} from '../../css/main.css';

const ProfilePic = (props) => (
  <section>
    {/* <img alt="none" src={props.picture}></img> */}
    <div className={fitomoPic}>
      <img src={defaultFitomo} alt="fitomo" />
    </div>
  </section>
);

export default ProfilePic;
