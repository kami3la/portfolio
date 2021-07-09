import React from 'react';
import { infoWrapper, info, img, box } from './Resume.module.scss';

import Box from '../../components/Box/Box';

const Resume = () => {

  return (
    <div>
      <div className={infoWrapper}>
        <div className={info}>
          <div alt='Me' className={img}></div>
          <div className={box}>
            <Box
              text='A year ago, I discovered my passion for creating web applications and since then I have been continuing my adventure with programming and learning new things with pleasure. I am a creative person with an open mind and not afraid of challenges. My interpersonal skills allow me to work perfectly in a group and
              make contacts efficiently. I am distinguished by high personal culture and willingness to constantly learn. As my current professional goal, I focus on my own development in the field of programming skills and knowledge of new technologies.'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;