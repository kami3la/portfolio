import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageContext from '../../contexts/LanguageContext';

import Home from '../../assets/icons/home.png';
import Resume from '../../assets/icons/resume.png';
import Projects from '../../assets/icons/projects.png';
import AboutMe from '../../assets/icons/me.png';
import Menu from '../../assets/icons/menu.png';

import { navbar, link, li, clicked, CHamburger, colourNav } from './Navbar.module.scss';
import { OHamburger } from './Hamburger.module.scss';

const Navbar = () => {
  const [ifOpen, setIfOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(0);
  const value = useContext(LanguageContext);
  const location = useLocation().pathname;
  const node = useRef();

  const names = (eng, pl) => {
    if (value.state.language === 'English') {
      return eng
    }
    return pl
  }

  const items =  [
    ['/home', location, names('Home', 'Strona główna'), Home, 'Home'],
    ['/resume', location, names('Resume', 'Życiorys'), Resume, 'Resume'],
    ['/projects', location, names('Projects', 'Projekty'), Projects, 'Projects'],
    ['/about-me', location, names('About me', 'O mnie'), AboutMe, 'About me']
  ];

  const classes = `${width < 923 && ifOpen ? OHamburger : CHamburger} ${scrollY > 0 && width >= 923 ? colourNav : ''}`

  const createItem = (path, location, linkName, src, alt) => {
    const classes = [link, location === path ? clicked : ''];
  
    return (
      <li key={path} className={li} onClick={() => setIfOpen(false)}>
        <Link className={classes.join(' ')} to={path}>
          <p>{linkName}</p>
          <img src={src} alt={alt} height="35px" width="35px" />
        </Link>
      </li>
    );
  }

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      }
      window.addEventListener('resize', () => setWidth(window.innerWidth));
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      }
    }, [ref, handler]);
  }

  const updateScroll = () => {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", updateScroll)
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", updateScroll);
    }
  });

  useOnClickOutside(node, () => setIfOpen(false));

  return (
    <div className={classes} ref={node}>
      <img src={Menu} alt="Menu" height="40px" width="40px" onClick={() => setIfOpen(!ifOpen)} />
      <nav>
        <ul className={navbar}>
          {items.map((item) => createItem(...item))}
        </ul>
      </nav>
    </div>
  );
}
  
export default Navbar;