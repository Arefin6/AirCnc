import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import ItemsCarousel from 'react-items-carousel';
import  Experiences from '../../Experiences';
import ExperienceDetails from './ExperienceDetails';

const Experience = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <section className="my-5">

           <div className="d-flex justify-content-between mb-3">
            <h5>Experiences</h5>
            <Link to="/" style={{color:'#2bde8c'}}>See All &#8594;	</Link>
         </div>

        <div>
        <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={12}
        leftChevron={<button className="indicators">{'<'}</button>}
        rightChevron={<button className="indicators">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
         {
              Experiences.map(experiences => <ExperienceDetails key={experiences.name} experiences = {experiences} ></ExperienceDetails>)
          }
          </ItemsCarousel>
          </div>
          
        </section>
        
    );
};

export default Experience;