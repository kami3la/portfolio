import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { button } from './App.module.scss';

import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar'
import Home from './containers/Home/Home'
import AboutMe from './containers/AboutMe/AboutMe'
import Resume from './containers/Resume/Resume'
import Projects from './containers/Projects/Projects'

import LanguageContext from './contexts/LanguageContext';
import { EN, PL } from './contexts/language';

const App = () => {
  const [languageState, setLanguageState] = useState({ state: EN });

  const changeLanguage = () => ( (languageState.state.language === 'English') ? setLanguageState({ state: PL }) : setLanguageState({ state: EN }));
  
  return (
    <>
      <LanguageContext.Provider value={languageState}>
        <button className={button} onClick={changeLanguage}>
          {languageState.state.language === 'English' ? 'PL' : 'ENG'}
        </button>
        <Background />
        <Navbar />
        {/* <Home /> */}
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/about-me" exact>
            <AboutMe />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </LanguageContext.Provider>
    </>
  );
}

export default App;
