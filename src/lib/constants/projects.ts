import images from 'src/lib/constants/images';

const projects = {
    'qubic-labs': {
        name: 'Qubic Labs',
        description: 'Q Labs is a research and development company that focuses on the development of quantum computing technologies. I worked on the development of a quantum simulator that is used to test quantum algorithms and quantum circuits.',
        skills: ['C#', 'C', 'C++', 'EagleCAD'],
        images: [],
        links: []
    },
    'st-michaels': {
        name: 'St. Michael\'s Hospital',
        description: 'St. Michael\'s College School is a private school in Toronto, Ontario. I worked on the development of a web application that is used to manage the school\'s student information system.',
        skills: ['JavaScript', 'React Native'],
        images: [],
        links: []
    },
    'predict-technologies': {
        name: 'Predict Technologies',
        description: 'Predict Technologies is a company that focuses on the development of a predictive analytics platform. I worked on the development of a web application that is used to manage the company\'s predictive analytics platform.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Postgres', 'AWS'],
        images: [],
        links: []
    },
    'islamic-institute-of-toronto': {
        name: 'Islamic Institute of Toronto',
        description: 'The Islamic Institute of Toronto is a non-profit organization that focuses on the development of Islamic education. I worked on the development of a web application that is used to manage the organization\'s student information system.',
        skills: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
        images: [images.iitWeb],
        links: []
    },
    'hiride': {
        name: 'HiRide',
        description: 'HiRide is a company that focuses on the development of a ride-sharing platform. I worked on the development of a web application that is used to manage the company\'s ride-sharing platform.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Postgres', 'Docker', 'Kubernetes', 'AWS'],
        images: [images.hirideWeb],
        links: []
    },
    'techguilds': {
        name: 'TechGuilds',
        description: 'TechGuilds is a company that focuses on the development of a web application that is used to manage the company\'s student information system.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Postgres', 'Azure'],
        images: [images.techguildsWeb],
        links: []
    },
    'realme': {
        name: 'Realme',
        description: 'Realme is a company that focuses on the development of a web application that is used to manage the company\'s student information system.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Remix', 'Node.js', 'Express', 'Postgres', 'Docker', 'Kubernetes', 'AWS', 'Polygon', 'Solidity'],
        images: [images.realmeWeb],
        links: []
    },
};

export default projects;

export type ProjectKeys = keyof typeof projects;
