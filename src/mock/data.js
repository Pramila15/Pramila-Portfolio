import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Pramila Dalavai',
  subtitle: 'I`m a Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: 'I believe in art , design and code',
  paragraphTwo: 'Won State Level Gold Medal and Award in artistry given by Karnataka Samskruti Team.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/17azdhINuYs8kGH2kLchyluKg99aPsSwF/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpeg',
    title: 'ArtyFloraaGallery',
    info: 'Simple Web Application having grid of all pictures posted on Artyfloraa feed in Instagram. Admin can add multiple files.',
    info2: 'React and Firebase',
    url: 'https://artyfloraa-final.web.app/',
    repo: 'https://github.com/Pramila15/ArtyFloraaGallery', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpeg',
    title: 'BREWED',
    info: 'Content streaming webpage',
    info2: 'Html , Css and Javascript',
    url: 'https://pramila15.github.io/Brewed/',
    repo: 'https://github.com/Pramila15/Brewed', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpeg',
    title: 'The New York Times Best Sellers',
    info: 'Jquery-Ajax implementation',
    info2: 'Html , Css , Javascript',
    url: 'https://nyt-bestsellers-stephanking.netlify.app/',
    repo: 'https://github.com/Pramila15/jquery-ajax', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpeg',
    title: 'COVID19 info',
    info: 'API:COVID19 api(www.covid19api.com)',
    info2: 'Html , Css and Javascript',
    url: 'https://covid19-info-status.netlify.app/ ',
    repo: 'https://github.com/Pramila15/covid19.gtihub.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.jpeg',
    title: 'Weather App',
    info: 'Web Application and api implementation',
    info2: 'Html , Css , Javascript',
    url: 'https://weather-pramila15.netlify.app/',
    repo: 'https://github.com/Pramila15/weather-app/tree/master/weather-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project8.png',
    title: 'Vaccine Tracker',
    info: 'Vaccinations against COVID-19: this data is collected by the Our World in Data team from official reports.',
    info2: 'Html , Css , Javascript',
    url: 'https://pramila15.github.io/vaccine-analysis.github.io/',
    repo: 'https://github.com/Pramila15/vaccine-analysis.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Student Project Scheduler',
    info: 'Simple Android Application with sqlite database implementation',
    info2: 'Android and Sqlite',

    repo: 'https://github.com/Pramila15/Student-Project-Scheduler/tree/master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: null,
    title: 'CHATROOM USING SOCKETS',
    info: 'A Unix system project where we implemented two way communication of client and server through sockets , a network interface.',
    info2: 'Python and Sockets',

    repo: 'https://github.com/Pramila15/Chatroom', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: null,
    title: 'PRODUCT MANAGEMENT PORTAL',
    info: 'The aim of this project was to analyze the client side and server-side of the website building.This project was an implementation of Apple website.',
    info2: 'Php and Javascript',

    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: null,
    title: 'ONLINE FOOD ORDER',
    info: 'Created a website for Online Ordering Custom Made for Restaurants that enable social distancing during pandemic.',
    info2: 'Mysql , Javascript and Php',

    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: null,
    title: 'STOCK MARKET SIMULATION',
    info: 'Created desktop application project where we fetched real time stock API and involved graph analysis.',
    info2: 'Javafx and Springboot',

    repo: '', // if no repo, the button will not show up
  },

];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'pramiladalavai@gmai.com',
};

// FOOTER DATA
export const footerData = {
  networks: [

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pramila-dalavai-256379191/',
    },

    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/pramila_dalvai/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Pramila15',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
