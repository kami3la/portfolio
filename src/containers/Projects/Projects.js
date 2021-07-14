import React from 'react';
import { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import { projects, flipCard, front, back, cardContent } from './Projects.module.scss';

import Title from '../../components/Title/Title';
import Box from '../../components/Box/Box';
import ScrollIcon from '../../components/ScrollIcon/ScrollIcon'

import myPlants from '../../assets/illustrations/myPlants.jpg';
import starWars from '../../assets/illustrations/starWars.PNG';
import yahtzeeGame from '../../assets/illustrations/yahtzeeGame.jpg';

const Projects = () => {
  const value = useContext(LanguageContext);

  return (
    <div>
      <ScrollIcon />
      <div className={projects}>
        <div className={flipCard}>
          <div className={cardContent}>
            <div className={front}><img src={myPlants} alt="project MyPlants" /></div>
            <div className={back}>
              <Box
                title={<Title text={value.state.projects.myPlants.header} size={20} bold='bold' />}
                text={value.state.projects.myPlants.text}
              />
            </div>
          </div>
        </div>
        <div className={flipCard}>
          <div className={cardContent}>
            <div className={front}><img src={starWars} alt="project Star Wars Quiz" /></div>
            <div className={back}>
              <Box
                title={<Title text={value.state.projects.starWars.header} size={20} bold='bold' />}
                text={value.state.projects.starWars.text}
              />
            </div>
          </div>
        </div>
        <div className={flipCard}>
          <div className={cardContent}>
            <div className={front}><img src={yahtzeeGame} alt="Yahtzee Game" /></div>
            <div className={back}>
              <Box
                title={<Title text={value.state.projects.yahtzee.header} size={20} bold='bold' />}
                text={value.state.projects.yahtzee.text}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
