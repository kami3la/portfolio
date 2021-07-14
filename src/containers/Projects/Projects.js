import React from 'react';
import { projects, flipCard, front, back, cardContent } from './Projects.module.scss';

import Title from '../../components/Title/Title';
import Box from '../../components/Box/Box';

import myPlants from '../../assets/illustrations/myPlants.jpg';
import starWars from '../../assets/illustrations/starWars.PNG';

const Projects = () => {

  return (
    <div className={projects}>
      <div className={flipCard}>
        <div className={cardContent}>
          <div className={front}><img src={myPlants} alt="project MyPlants" /></div>
          <div className={back}>
            <Box
              title={<Title text='MyPlants' size={20} bold='bold' />}
              text='Application for plant lovers. The project uses the REST API that was created during the previous project. The idea of it is to create a collection of many plant species which can be owned at home with its description and tips how to take care of them.\nCreated with: ReactJS, SCSS, NodeJS, Express.js, MongoDB, Mongoose, TypeScript, Heroku, Lucidchart, ESLint, StyleLint, Jest, Jira, Scrum, Figma\nLink: \uhttps://github.com/LittleCodersCrew/CodersCamp2020.Project.React.MyPlants'
            />
          </div>
        </div>
      </div>

      <div className={flipCard}>
        <div className={cardContent}>
          <div className={front}><img src={starWars} alt="project Star Wars Quiz" /></div>
          <div className={back}>
            <Box
              title={<Title text='Star Wars Quiz' size={20} bold='bold' />}
              text='This project is a quiz that tests the knowledge of the Star Wars universe.\nCreated with: HTML, SCSS, JavaScript, Star Wars API, Jest, Trello, Scrum, Figma, BEM methodology\nLink: \uhttps://github.com/ruljin/CodersCamp2020.Project.JavaScript.StarWarsQuiz'
            />
          </div>
        </div>
      </div>

      <div>d</div>
    </div>
  );
}

export default Projects;
