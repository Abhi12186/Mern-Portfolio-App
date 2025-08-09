import React from 'react';
import { MdSchool } from "react-icons/md";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Education.css';

const Education = () => {
  return (
    <>
      <div className='education' id="education">
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
            Education Details
        </h2>
        <hr />
        
        <VerticalTimeline>
         <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2024 - 2026"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">MCA</h3>
    <h4 className="vertical-timeline-element-subtitle">MITS Gwalior, IN</h4>
    
    
  </VerticalTimelineElement>
         <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2021 - 2023"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">BCA</h3>
    <h4 className="vertical-timeline-element-subtitle">Science College Gwalior, IN</h4>
    
    
  </VerticalTimelineElement>

  
        </VerticalTimeline>
        </div>
    </>
  );
};

export default Education;
