import React from 'react';
import { Images, image } from './images';

const imageData:image[] = [
    {
      img: '/enjoey.png',
      title: 'Enjoey Roadster',
      date: 'June 2021',
      description: 'A Google Chrome Extension developed to increase PlayStation employee interaction and communication over Slack, for the 2021 NPX Hackathon, using automated start and end-of-day messages with personal flair opportunities. I worked with 3 full-time PS engineers, and our project won first-prize.',
      chips: ['React','Typescript']
    },
    {
      img: '/hayane.png',
      title: 'Hayane',
      date: 'March 2021',
      description: `A web application that simulates the dorm room experience of shared camaraderie of studying late at night. Developed to increase connectivity between CMU students during the COVID-19 pandemic and virtual learning. Used websockets to connect user sessions without the complexity of a backend service.
      I developed and presented this app with three other students at Tartanhacks 2021.`,
      chips: ['React','HTML','CSS']
    },
    {
      img: '/spreadsheet.png',
      title: 'Spreadsheet to Calendar Sync',
      date: 'September 2019',
      description: `A Google Apps Script to take input from a Google Spreadsheet and to create, edit, or delete an event on Google Calendar and vice-versa, with email notification integration and discord webhook integration. Was used by High School Science Department and Robotics Club, performed better than existing Zapier add-ons at the time.`,
      chips: ['Google Apps Script'],
    },
    {
      img: '/robo.jpg',
      title: 'Vex Robotics',
      date: 'June 2018 - April 2020',
      description: `I developed and tested the driver control and autonomous movement code for use in Vex Robotics Competitions, utilizing PID algorithms for motion and arm movements. I also used motion planning libraries to execute autonomous programs, and developed a graphical GUI for program selection, all in a C++ environment. Our team triple-qualified for the World Championships in the 2019-2020 season, and won two international tournaments in Japan.`,
      chips: ['C++'],
    },
];

export const Projects:React.FC<{}> = () => (
    <div className="flex flex-col items-center align-center">
        <h1 className="text-5xl font-bold p-10 text-slate-800"> 
            Projects
        </h1>
        <div className="flex place-content-center bg-slate-800/50 p-20 w-400px rounded-[100px]">
                <Images images={imageData}/>
        </div>
    </div>
);