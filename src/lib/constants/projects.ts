import images from 'src/lib/constants/images';

const projects = {
    'qubic-labs': {
        name: 'Qubic Labs',
        description: 'Qubic Labs is a startup dedicated in using wearable technology to improve physical fitness.',
        skills: ['C#', 'C', 'C++', 'EagleCAD'],
        images: [],
        links: []
    },
    'st-michaels': {
        name: 'St. Michael\'s Hospital',
        description: 'Worked with Dr. Flora Matheson, Scientist at St. Michel’s Hospital, to develop a multi-platform mobile personal therapy app using React Native. Dr. Matheson was one of the first researchers in Canada to investigate and measure the strong relationship between problem gambling and homelessness. She and Good Shepherd Ministries co-developed and launched the first gambling-addiction program for people who are homeless.',
        skills: ['JavaScript', 'React Native'],
        images: [],
        links: []
    },
    'predict-technologies': {
        name: 'Predict Technologies',
        description: 'Predict Technologies is a company that provides Patient Health Integrated Electronic Records (PHIER). PHIER is designed to assist and improve the diagnostic process for practicing physicians who currently employ electronic health record systems.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Postgres', 'AWS'],
        images: [],
        links: []
    },
    'islamic-institute-of-toronto': {
        name: 'Islamic Institute of Toronto',
        description: 'The Islamic Institute of Toronto is a premier Islamic Educational Institution, located in Toronto Canada offering post-secondary courses in Arabic Language, Islamic Jurisprudence, Ethics and Spirituality, Islamic History and Civilization amongst others.',
        skills: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
        images: [images.iitWeb],
        links: []
    },
    'hiride': {
        name: 'HiRide',
        description: 'HiRide is a carpooling app for long distance travel, with the mission to improve the interaction between riders and drivers',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Postgres', 'Docker', 'Kubernetes', 'AWS'],
        images: [images.hirideWeb],
        links: []
    },
    'techguilds': {
        name: 'TechGuilds',
        description: 'TechGuilds is a proudly Canadian company that specializes in digital customer experiences, the company\'s heritage has been with Sitecore, and envisions to include SaaS-based, headless CMS and microservice architecture. Some of the projects developed are: Peek WebXR, a seamless VR/AR experience plug-in for Sitecore and Kajoo, an AI-powered no/low-code solution that converts design mock-ups to production-ready code.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Postgres', 'Azure'],
        images: [images.techguildsWeb],
        links: []
    },
    'realme': {
        name: 'Realme',
        description: 'RealMe is a platform that provides micro-investors access to real estate investments.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Remix', 'Node.js', 'Express', 'Postgres', 'Docker', 'Kubernetes', 'AWS', 'Polygon', 'Solidity'],
        images: [images.realmeWeb],
        links: []
    },
};

export default projects;

export type ProjectKeys = keyof typeof projects;
