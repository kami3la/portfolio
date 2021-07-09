import React from 'react';
import { projects, flipCard, front, back, cardContent } from './Projects.module.scss';

import Title from '../../components/Title/Title';
import Box from '../../components/Box/Box';

import myPlants from '../../assets/illustrations/myPlants.jpg';

const Projects = () => {

  return (
    <div className={projects}>
      <div className={flipCard}>
        <div className={cardContent}>
          <div className={front}><img src={myPlants} alt="project MyPlants" /></div>
          <div className={back}>
            <Box
              title={<Title text='MyPlants' size={20} bold='bold' />}
              text='Application for plant lovers.\nCreated with: ReactJS, SCSS, ESLint, StyleLint, Jest, Jira, Scrum, Figma\nLink: https://github.com/LittleCodersCrew/CodersCamp2020.Project.React.MyPlants'
            />
          </div>
        </div>
      </div>
      <div>d</div>
      <div>d</div>
    </div>
  );
}

export default Projects;
