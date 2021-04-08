import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'LanghamerDev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'LanghamerDev', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome! I am',
  name: 'Mark Langhamer', // John
  subtitle: 'Full Stack Developer & Instructor', // I'm the Unknown Developer.
  cta: '', // Know more
};

// ABOUT DATA
export const aboutData = {
  img: 'mark.jpg', // put your profile image (recommended aspect radio: square)
  paragraphOne: 'Studied Software Development at Northwestern University',
  paragraphTwo:
    'Since then I have worked at Persevere, where I have been teaching justice-involved individuals how to code and prepare for work as developers.',
  paragraphThree:
    'I have worked with our partner company at Banyan Labs as well, who employ our students to work on real paid projects. My role here invovles active participation in client projects, mentoring our new developers, and acting as lead developer at times.',
  resume: 'https://langhamerm.github.io/Resume/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mern.png',
    title: 'M.E.R.N Social',
    info: 'Social media site that performs the full CRUD cycle',
    info2:
      'Technologies involved: Mongo, Express, React, Node, Redux, Material-UI, Mongoose, Axios, and Moment.',
    url: 'https://suspicious-goldstine-c10937.netlify.app/',
    repo: 'https://github.com/langhamerm/MERN-2020', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pcc.png',
    title: 'Full Stack Learning Management System',
    info:
      'This LMS includes user login, class announcements, interactive lessons, homework assignments/submissions, and admin login for instructors to exam student work and monitor the website',
    info2:
      'Technologies involved: Firebase, Express, React, Node, Redux, Material-UI, Axios, and CloudConvert.',
    url: 'https://fcc-social.web.app/',
    repo: 'https://github.com/langhamerm/FCC-Fullstack-Firebase-React', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'banlabs.png',
    title: 'Banyan Labs',
    info: 'Development Company Website',
    info2: 'Technologies Used: React, Redux, Email.js, Sass, Google Maps, Bootstrap, and Axios',
    url: 'https://banyanlabs.io/',
    repo: 'https://github.com/PersevereCode/BanyanLabs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'romroofs.png',
    title: 'Roman Roofs',
    info: 'Roofing Company Website',
    info2: 'Technologies Used: Gatsby.js, Redux, Email.js, Styled-Components, Google Maps API, Bootstrap, and Contentful',
    url: 'https://romanroofs.com/',
    repo: 'https://github.com/Banyan-Labs/roman-roofing', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mark-langhamer-983516127/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/langhamerm',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/markey.mark.773',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/langhamerm',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
