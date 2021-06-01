import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar'
import Home from './containers/Home/Home'
import AboutMe from './containers/AboutMe/AboutMe'

const App = () => {
  return (
    <>
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
        {/* <Route path="/resume" exact>
          <Resume />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route> */}
        <Route path="/about-me" exact>
          <AboutMe />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
