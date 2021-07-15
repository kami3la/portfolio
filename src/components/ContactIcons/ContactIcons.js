import React from 'react';
import { icons } from './ContactIcons.module.scss'

import Fb from '../../assets/icons/fb.png';
import Github from '../../assets/icons/github.png';
import Linkedin from '../../assets/icons/linkedin.png';

const ContactIcons = () => {

  return (
    <div className={icons}>
      <a href='https://www.facebook.com/kamila.grusza/' target='_blank' rel='noreferrer'><img src={Fb} alt='Facebook' height="35px" width="35px" /></a>
      <a href='https://github.com/kami3la' target='_blank' rel='noreferrer'><img src={Github} alt='Github' height="35px" width="35px" /></a>
      <a href='https://www.linkedin.com/in/kamila-grusza-190842217/' target='_blank' rel='noreferrer'><img src={Linkedin} alt='Linkedin' height="35px" width="35px" /></a>
    </div>
  );
}

export default ContactIcons;
