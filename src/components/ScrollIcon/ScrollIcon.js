import React, { useEffect, useState } from 'react';
import { scroll, show, hide } from './ScrollIcon.module.scss'

import arrowTop from '../../assets/icons/arrowTop.png';
import arrowDown from '../../assets/icons/arrowDown.png';


const ScrollIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  
  const scrollDown = () => {
    window.scroll({
      top: window.innerHeight-60,
      left: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={scroll}>
      {isVisible}
      <div onClick={scrollDown} className={isVisible ? hide : show}>
        <img src={arrowDown} alt='scroll to next section' height="60px" width="60px" />
      </div>
      <div onClick={scrollTop} className={isVisible ? show : hide}>
        <img src={arrowTop} alt='scroll to top' height="60px" width="60px" />
      </div>
    </div>
  );
}

export default ScrollIcon;
