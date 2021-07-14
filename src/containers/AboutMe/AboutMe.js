import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/src/styles.js';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import styles from './AboutMe.module.scss';

import ScrollIcon from '../../components/ScrollIcon/ScrollIcon'
import Title from '../../components/Title/Title';
import Box from '../../components/Box/Box';

import France from '../../assets/illustrations/francja.jpg';
import Granada from '../../assets/illustrations/granada.jpg';
import Aveiro from '../../assets/illustrations/portugalia.jpg';
import Malta from '../../assets/illustrations/malta.jpg';
import Poland from '../../assets/illustrations/polska.jpg';
import Nl from '../../assets/illustrations/holandia.jpg';

const slider = (
  <AwesomeSlider animation="cubeAnimation">
    <div data-src={France} />
    <div data-src={Granada} />
    <div data-src={Aveiro} />
    <div data-src={Malta} />
    <div data-src={Poland} />
    <div data-src={Nl} />
  </AwesomeSlider>
);

const AboutMe = () => {

  return (
    <div>
      <ScrollIcon />
      <div className={styles.container}>
        <div className={styles.intro}>
          <Title text='A few words about who I am' size={30} bold='bold' />
          <div className={styles.introInfo}>
            <div alt='Me' className={styles.img}></div>
            <div className={styles.box}>
              <Box
                text='I am 23 years old and I live and study in Poznań, Poland. I was supposed to become a mathematics and computer science teacher, but during my 
                studies I encountered programming which made me extremely interested. Then I decided to start learning web programming and my passion and love for coding only grew. Programming makes me 
                happy, it gives me challenges that I like so much, and it satisfies my desire for continuous learning. Apart from programming, I also love traveling, meeting new people, drinking good 
                coffee, being surrounded by animals, solving puzzles and just being out in nature.'
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.hobby}>
          <Title text='My hobby' size={30} bold='bold' />
          <div className={styles.hobbyBoxes}>
            <div className={styles.hobbyBox}>
              <div className={styles.hobbyBoxContent}>
                <div className={styles.frontBox}>
                  <Title text='Games - volleyball' size={20} bold='bold' />
                </div>
                <div className={styles.backBox}>
                  <Box
                    text='I love all kinds of games, especially logic and team games. In my free time, I am happy to solve crosswords and nonograms, play computer games and board games, and go to escape rooms. My favourite sport is volleyball. When I was younger, I trained it for 6 years, and I started in elementary school when I went to the sports class. I&rsquo;ve always had a lot of fun doing it, and I still enjoy playing with my friends whenever the opportunity arises. That is why every time we go to the lake, camping or the sea, we always take a volleyball ball with us. There is no more favorable environment for volleyball pads than soft sand.'
                  />
                </div>
              </div>
            </div>
            <div className={styles.hobbyBox}>
              <div className={styles.hobbyBoxContent}>
                <div className={styles.frontBox}>
                  <Title text='Houseplants' size={20} bold='bold' />
                </div>
                <div className={styles.backBox}>
                  <Box
                    text='Potted plants are my next passion. I believe that colorful pots with well-kept plants are an indispensable element of my home. It gives me great joy when a plant produces a new leaf, flower, or a new baby. It all started with the purchase of one single plant and before I knew it, there was a whole collection of plants on my shelves. Potted plants are amazing because they photosynthesize, increases the humidity in the room and also has a relaxing effect on us. In addition, many plants have their own specific properties and application possibilities, for example some plants can be used in the kitchen or to create various types of cosmetics or medicines. The only downside to having potted plants for me is the problem with taking care of them during my trips.'
                  />
                </div>
              </div>
            </div>
            <div className={styles.hobbyBox}>
              <div className={styles.hobbyBoxContent}>
                <div className={styles.frontBox}>
                <Title text='Traveling' size={20} bold='bold' />
                </div>
                <div className={styles.backBox}>
                  <Box
                    text='It is very important for me to travel both in Poland and to other countries. That is why in my spare time I always try to visit new places and discover foreign cultures. After each trip, I am richer with new knowledge and experience, which I appreciate very much. My favorite type of travel is visiting as many places and doing as many things as possible, so I usually not only limit myself to the destination but also travel to nearby cities as well as countries. I love meeting new cultures and new people, that&rsquo;s why I once hitchhiked in Spain. This is the fastest way to meet new people and meet their stories.'
                  />
                </div>
              </div>
            </div>
            <div className={styles.hobbyBox}>
              <div className={styles.hobbyBoxContent}>
                <div className={styles.frontBox}>
                  <Title text='Billiards' size={20} bold='bold' />
                </div>
                <div className={styles.backBox}>
                  <Box
                    text='My last interest, quite unusual this time, is billiards. An evening game of pool with my friends is the perfect time for me. I have been playing socializing for many years and I never get tired of it. My passion is also shared by my parents who decided to buy a pool table, which was certainly a very wise decision during the recent lockdowns. I really like assembling furniture according to the instruction algorithm, but I have to admit that assembling the pool table was quite a challenge.'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.travels}>
          <Title text='My travels' size={30} bold='bold' />
          <div className={styles.travelsSlider}>
            {slider}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
